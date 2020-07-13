const discord = require('discord.js');
const prefix = "n!"
const client = new discord.Client();
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
const token = require('./token.json').token
const fetch = require('node-fetch');
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const mysql = require('mysql');
const connection = mysql.createPool({
  host:'localhost'|| process.env.HOST,
  user: 'root' || process.env.USER,
  password: '' || process.env.PASSWORD,
  database: 'negan' || process.env.DATABASE 
});
fs.readdir("./commands/", (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let command = require(`./commands/${file}`);
      console.log("Successfully loaded " + file)
      client.commands.set(command.name, command);
  });
});

client.on("ready", ()=>{
    console.log("ok");
    client.user.setActivity(`n!help`, {type: "PLAYING"}); 
    });
 
client.on('message',message => {
  if(message.author.bot)return;
  connection.query(`SELECT * FROM users WHERE id = ${message.author.id}`,(err,rows)=>{
    rowCount = 0;
    rows.forEach(row=>{rowCount++})
    if(rowCount == 0){
      connection.query(`INSERT INTO users (id,xp,level) VALUES (${message.author.id},0,1)`);
    }
    else{
      connection.query(`UPDATE users SET xp=xp+${Math.floor(Math.random()*7)} WHERE id=${message.author.id}`);
      connection.query(`SELECT * FROM users WHERE id=${message.author.id}`,(err,rows)=>{
        let xp = rows[0].xp;
        let level = rows[0].level;
        let nextlevel = level * 200;
        if(xp > nextlevel){
          message.channel.send(`${message.author.username} est maintenant niveau ${level+1}`);
          connection.query(`UPDATE users SET level=level+1 WHERE id=${message.author.id}`);
        }
      })
    }
  })
  if (!message.content.toLowerCase().startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase() || client.commands.find(cmd => cmd.aliases);
  if (!client.commands.has(commandName)){
    message.channel.send(commandName+" n'est pas une commande")
    return;}

try {
	const command = client.commands.get(commandName);
command.execute(message,args);
} catch (error) {
	console.error(error);
	message.reply("y'a une erreur");
}
})    

client.login(process.env.TOKEN);