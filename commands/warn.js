const discord = require('discord.js');
module.exports = {
    name: 'warn', 
    execute(message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR") ){
            message.channel.send("faut les perms");
            return;
        }
        const member = message.mentions.users.first();
        if(!member){
            return;
        }
        let reason = args.slice(1).join(" ");
        const embed = new discord.MessageEmbed()
        .setTitle(member.username + " a été avertit")
        .setDescription("raison : `" +reason+"`");
        message.channel.send(embed);
    }
}