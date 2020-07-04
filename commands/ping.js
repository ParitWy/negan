const discord = require('discord.js');
module.exports = {
    name:'ping', 
    execute(message, args,bot = new discord.Client()) {
       
            message.channel.send("Pinging...").then(m =>{
                var ping = m.createdTimestamp - message.createdTimestamp;
                var botPing = Math.round(bot.pi);
                setTimeout(()=>{m.edit(`att un peu`);},2000)
                
                setTimeout(()=>{m.edit(` oof je lag peut etre pas, j'ai: ${ping}ms de ping`)},4000);
            });
            
    }
}