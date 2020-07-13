const discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
    name: 'help',
    execute(message, args) {
    const embed = new discord.MessageEmbed()
    .setTitle("Commandes du bot")
    .setDescription("**Commandes standard** :\n\n`rank` `meme`  `pfp`  `random <min> <max>` `howgay` `bite` `nationalité`\n\n\n**Administration** : \n\n `seticon <url>`  `warn`\n\n\n**Taches automatisées** : \n\n`role` `poll` `libe` `decode` `encode`\n\n\n**Utilitaires:**\n\n`ping` `pave` `server` `int` `info`\n\n\n**Commandes modo** :\n\n`kick <user>`  `ban <user> <raison>`  `mute <user> <raison>`  `unmute <user> \n<raison>`  `tempmute <user> <temps> <raison>`\n\nle prefix est : `n!`")
    .setColor("#C22200");
    message.channel.send(embed);
    }
}