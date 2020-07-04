const discord = require("discord.js");


module.exports= {
name:'unban',
execute(message, args) {
    const unbanned = message.mentions.members.first();
    if(!message.member.hasPermission("BAN_MEMBERS")){
message.channel.send("faut les perms");
return;
    }
    if(!unbanned){
        message.channel.send("utilisateur non trouvé");
        return;
    }
    try{
unbanned.unban(args.slice(1).join(' '));
    }catch(err){
        console.error(err);
        message.channel.send("oof!")
        return;
    }
const embed = new discord.MessageEmbed()
.setTitle("Utilisateur unban")
.setDescription("raison : `"+args.slice(1).join(' ')+'`');
message.channel.send(embed);
}
}