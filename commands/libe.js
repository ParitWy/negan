module.exports = {
    name: 'libe',
    execute(message, args) {
        const libe = ["le sud","la ruche","le reach","le lag","la version","le ping","les blocks","le serveur","pour un anti-cheat","les maths","bichard"];
        message.channel.send("c'est rien c'est "+libe[Math.floor(Math.random() * libe.length)]);
    }
}