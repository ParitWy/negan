const discord = require('discord.js');
module.exports = {
    name:'seticon',
    execute(message, args) {
        if(message.member.hasPermission("ADMINISTRATOR")){
        if(!args[0]){
            message.reply("il faut mettre un lien");
        }
        else{
            message.guild.setIcon(args[0]).then(()=>{message.channel.send("icone changée")}).catch((err)=>{message.channel.send("petit probleme");console.error(err);})
        }
        }
        else{
message.channel.send("perms manquantes")
        }
    }
}