const discord = require('discord.js');
module.exports = {
    name: 'pdp',
    aliases:['pp'],
    execute(message, args) {
        if(!message.mentions.users.first()){
            const embed = new discord.MessageEmbed()
            .setColor("#C22200")
            .setTitle(`pdp de ${message.author.username}`)
            .setImage(message.author.displayAvatarURL({dynamic:true,size:512}))
            .addField("**Lien:**", [
                `[${message.author.username}](${message.author.displayAvatarURL({ dynamic: true })})`,
            ]);
            message.channel.send(embed);
        }
        else{
            const embed = new discord.MessageEmbed()
            .setColor("#C22200")
            .setTitle(`pdp de ${message.mentions.users.first().username}`)
            .setImage(message.mentions.users.first().displayAvatarURL({dynamic:true,size:512}))
            .addField("**Lien:**", [
                `[${message.mentions.users.first().username}](${message.mentions.users.first().displayAvatarURL({ dynamic: true })})`,
            ]);
            message.channel.send(embed);
        }
    }
}