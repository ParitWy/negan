const discord = require('discord.js');
module.exports = {
name:'encode',
execute(message, args) {
    if(!args[0]){
        message.channel.send("met du texte");
        return;
    }
    try{
    const embed = new discord.MessageEmbed()
    .setTitle("utf8 to base64")
    .setDescription("**DECODE** : \n"+args.join(' ')+"\n\n**ENCODE** : \n"+Buffer.from(args.join(' ') ,'binary').toString('base64'));
    message.channel.send(embed);
    }
    catch(err){message.channel.send("optn y'a un probleme");console.error(err);}

}
}