const discord = require('discord.js');
module.exports = {
    name: 'ban',
    execute(message, args) {
        user = message.mentions.members.first();
        if(!user){
            message.reply("mentionne quelqu'un");
            return;
        }
        if(message.member.hasPermission("BAN_MEMBERS")){
        user.send(`t'as été ban par ${message.author.username}`);
        user.ban(args.slice(1).join(" ")).then(member => {
            
            if(args[1]){
            const embed = new discord.MessageEmbed()
            .setTitle(user.user.username+" a été ban")
            .setDescription("**raison** : "+"`"+args.slice(1).join(" ")+"`");
            message.channel.send(embed);
            }
            else{
                const embed = new discord.MessageEmbed()
            .setTitle(user.user.username+" a été ban")
            .setDescription("**raison** : `non specifiée`");
            message.channel.send(embed);
            }}).catch((error)=>{
            message.channel.send("y'a une erreur");
            console.error(error);
        });
        }else{
            message.reply("faut les perms mec")
        }
    }
}