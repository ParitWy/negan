const discord = require('discord.js');
const client = new discord.Client();
let prefix = "N!"
client.on("ready", ()=>{
    console.log("ok")
});
client.on("message",msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const args_s = msg.content.slice(command.length + prefix.length);

    if(command == "say"){
        msg.channel.send(args_s);
        msg.delete();
        
    }
})
client.login("NzI2NTE5MTk1OTgxOTcxNTI4.Xved0w.yw7s4W-lYPhe_Z4AqHGMN_LA7pc")