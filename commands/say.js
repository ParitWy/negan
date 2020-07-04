module.exports = {
    name: 'say',
    execute(message, args){
        message.delete().catch((error)=>{
            console.log("probleme dans say.js ligne 4");
            console.error(error);
        });
        message.channel.send(args.join(" "));
    }
}