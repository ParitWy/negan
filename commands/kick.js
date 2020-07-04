const discord = require('discord.js');
module.exports = {
    name: 'kick',
    execute(message, args) {
        user = message.mentions.members.first();
        if(!user){
            message.reply("mentionne quelqu'un");
            return;
        }
        if(message.member.hasPermission("KICK_MEMBERS")){
        user.kick().then(member => {member.send(`t'as été kick par ${message.author.username}`).catch(err=>{console.error(err)});
        if(args[1]){
            const embed = new discord.MessageEmbed()
            .setTitle(user.user.username+" a été kick")
            .setDescription("**raison** : "+"`"+args.slice(1).join(" ")+"`");
            message.channel.send(embed);
            }
            else{
                const embed = new discord.MessageEmbed()
            .setTitle(user.user.username+" a été kick")
            .setDescription("**raison** : "+"`non specifiée`");
            message.channel.send(embed);
            }});
        }else{
            message.reply("faut les perms mec")
        }
    }
}