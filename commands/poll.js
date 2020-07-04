var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const unicode = ["🇦", "🇧", "🇨","🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴", "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿"]

const discord = require('discord.js');
const client = new discord.Client();
module.exports = {
    name:'poll',
    execute(message, args) {
        let args_s = args.join(" ");
        let poll = args_s.split("/");
        var result = poll.slice(1);
        for(var x = 0;x<result.length;x++){
        result[x] = `:regional_indicator_${alphabet[x]}: `+result[x]
        }
        if(poll.length > 20 || poll.length == 1 || !poll){message.reply("<:oof:727201051278835783>  reessayez avec moins ou plus de choix");return;}
        const embed = new discord.MessageEmbed()
        .setColor('WHITE')
        .setAuthor(message.author.username,message.author.displayAvatarURL())
        .setTitle("📈 | **"+"Question : " + poll[0]+"**\n┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉")
        .setDescription(result.join("\n\n")+"\n**┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉**")
        .setFooter("Negan poll system");
        message.channel.send(embed).then(m=>{ for(var x = 0;x<result.length;x++)m.react(unicode[x])}).catch(err=>{console.error(err)});
    }
}