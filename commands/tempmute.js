const ms = require('ms')
const discord = require('discord.js');
module.exports = {
    name: 'tempmute',
    execute(message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")){
            message.channel.send("faut les perms");
            return;
        }
        let role = message.guild.roles.cache.find(r => r.name == 'Muted');
        let member = message.mentions.members.first();
        let membername = member;
        try{
            if(!args[1]){
                message.channel.send("faut ecrire le nombres de minutes");return;}
        member.roles.add(role);
        const embed = new discord.MessageEmbed()
        .setTitle("utilisateur mute")
        .setDescription("temps : `"+args[1]+"`\n\n raison : `"+args.slice(2).join(" ")+"`");
        message.channel.send(embed);
        setTimeout(()=>{member.roles.remove(role);message.channel.send(`${membername} a été unmute`)},ms(args[1]))
    }
        catch(err){console.error(err);}
    }
}