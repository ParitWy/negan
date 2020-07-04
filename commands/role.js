const discord = require('discord.js');
module.exports = {
    name: 'role',
execute(message, args) {
    const role = message.mentions.roles.first();
    if(!role){
        message.channel.send("mentionne un role");
        return;
    }
    if(!message.member.hasPermission("MANAGE_ROLES")){
        message.channel.send("faut les permissions");
        return;
    }
    message.member.roles.add(role).then(() => {message.channel.send(`role ${role.name} donné à ${message.author.username}`)}).catch(err =>{console.error(err)});
}
}