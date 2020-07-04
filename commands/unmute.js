const discord = require('discord.js');
module.exports = {
    name: 'unmute',
    execute(message, args){
        if(!message.member.hasPermission("MANAGE_ROLES")){
            message.channel.send("faut les perms");
            return;
        }
        
        let role = message.guild.roles.cache.find(r => r.name == 'Muted');
        let member = message.mentions.members.first();
        if(!member){
            message.channel.send("je trouve pas ce membre");
            return;
        }
        try{
        member.roles.remove(role);
        const embed = new discord.MessageEmbed()
        .setTitle("utilisateur unmute");
        message.channel.send(embed);
        }
        catch(err){console.error(err);}
    }
}