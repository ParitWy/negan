const mysql = require('mysql');
let xp;
let level;
const discord = require('discord.js');
const connection = mysql.createPool({
    host:'localhost'|| process.env.HOST,
    user: 'root' || process.env.USER,
    password: '' || process.env.PASSWORD,
    database: 'negan' || process.env.DATABASE 
  });

module.exports = {
    name:'rank',
    execute(message, args) {
        connection.query(`SELECT * FROM users WHERE id=${message.author.id}`,(err,rows)=>{

            xp = rows[0].xp;
            level = rows[0].level;
            const embed = new discord.MessageEmbed()
        .setTitle('Rank de '+message.author.username)
        .setDescription(`xp : ${xp}\nlevel : ${level}`);
        message.channel.send(embed);
             });
        
        
    }
}