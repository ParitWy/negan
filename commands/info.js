const discord = require('discord.js');
module.exports = {
    name: 'info',
    execute(message, args) {
        let embed = new discord.MessageEmbed()
        embed.setAuthor(`Pseudo: ` + message.author.username)
        embed.setDescription("Info sur toi")
        embed.setColor("#FF00FF")
        embed.addField("Username", `${message.author.username}#${message.author.discriminator}`)
        embed.addField("ID", message.author.id)
        embed.addField("Crée A", message.author.createdAt)
        embed.addField("Tu as rejoint ce serv à", message.member.joinedAt)
        embed.setFooter("Userinfo")
        message.channel.send(embed);

    }
}