const discord = require('discord.js');
module.exports = {
    name:'hax',
    execute(message, args) {
            const embed = new discord.MessageEmbed()
            .setTitle("Pour le tuto comment h4x :")
            .addField("**Comment h4x**","[elh4xor.com](https://2no.co/2YVU36)");
            message.channel.send(embed);
        
    }
}