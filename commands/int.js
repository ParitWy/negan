module.exports ={
    name: 'int',
    execute(message, args) {
        var int = Math.floor(args[0]);
        if(isNaN(int)){
            message.channel.send("veuillez rentrer un nombre moins grand");
            return;
        }
        message.channel.send(`le nombre entier est : ${int}`)
    }
}