const discord = require('discord.js');
module.exports = {
    name:'ouinon',
    execute(message, args) {
    const choices = ["oui","non","peut être","jsp","tu reves","mais bien sur que ui"];
    const embed = new discord.MessageEmbed()
    .setAuthor(message.author.username,message.author.displayAvatarURL())
    .setTitle(args.join(" "))
    .setDescription(`**reponse : ${choices[Math.floor(Math.random() * choices.length)]}`);
    message.channel.send(embed);
    }
}