module.exports = {
    name:'random',
    execute(message, args) {
        const min = Math.floor(args[0]);
        const max = Math.floor(args[1]);
        if(isNaN(min) || isNaN(max)){
            message.channel.send("il faut deux nombres");
            return;
        }
        const num = Math.floor(Math.random() * max)+min;
        message.channel.send("le nombre aleatoire est : "+num);
    }
}