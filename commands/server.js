const discord = require('discord.js');
module.exports = {
    name:'server',
    execute(message, args) {
        const embed = new discord.MessageEmbed()
        .setColor("#C22200")
        .setTitle("Infos du serveur")
        .setDescription(`**Infos Principales** :\n\n**>Nom du serveur :** ${message.guild.name}\n**>Owner :** ${message.guild.owner}\n**>Region :** ${message.guild.region}\n\n**Stasts** : \n\n**>Nombre de membres :** ${message.guild.memberCount}\n**>Nombre de channels textuels :** ${message.guild.channels.cache.filter(channel => channel.type === 'text').size}\n**>Nombre de channels vocaux :** ${message.guild.channels.cache.filter(channel => channel.type === "voice").size}\n**>Nombre de roles :** ${message.guild.roles.cache.size}\n**❯Nombre d'Emotes classiques:** ${message.guild.emojis.cache.filter(emoji => !emoji.animated).size}\n**❯Nombre d'Emotes animées:** ${message.guild.emojis.cache.filter(emoji => emoji.animated).size}`);
        message.channel.send(embed);
    }
}