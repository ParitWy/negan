const discord = require('discord.js');
module.exports = {
name: 'decode',
execute(message, args) {
    if(!args[0]){
        message.channel.send("met du texte");
        return;
    }
    try{
const embed = new discord.MessageEmbed()
.setTitle("base64 to utf8")
.setDescription("**ENCODE** : \n"+args.join(' ')+"\n\n**DECODE** : \n"+Buffer.from(args.join(" "), 'base64').toString('binary'));
message.channel.send(embed)
    }  catch(err){message.channel.send("optn y'a un probleme");console.error(err);}
}
}