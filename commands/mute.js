const discord = require('discord.js');
module.exports = {
    name: 'mute',
    execute(message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")){
            message.channel.send("faut les perms");
            return;
        }
        let role = message.guild.roles.cache.find(r => r.name == 'Muted');
        let member = message.mentions.members.first();
        try{
        member.roles.add(role);
        if(args[1]){
            const embed = new discord.MessageEmbed()
            .setTitle(member.user.username+" a été mute")
            .setDescription("**raison** : "+"`"+args.slice(1).join(" ")+"`");
            message.channel.send(embed);
        }
        else{
            const embed = new discord.MessageEmbed()
            .setTitle(member.user.username+" a été mute")
            .setDescription("**raison** : "+"`non specifiée`");
            message.channel.send(embed);
        }
    }
        catch(err){console.error(err);}
    }
}