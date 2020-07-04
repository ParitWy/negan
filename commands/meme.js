const discord = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
    name: 'meme',
    execute(message, args) {
        try{   
            fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(json => {
                let embed = new discord.MessageAttachment(json.url)
                message.channel.send(embed);
                message.edit(embed)
            
            })}catch(err){console.error(err)
        
            };
    }
}