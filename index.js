const discord = require('discord.js');
const prefix = "n!"
const client = new discord.Client();
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
const fetch = require('node-fetch');
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
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
  if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;
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

client.login("mRgAl7ZYqKP0RDXclPcJmsLCzBSo-Gdm");