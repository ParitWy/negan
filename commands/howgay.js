module.exports = {
    name: 'howgay',
    execute(message, args) {
        message.channel.send(`${message.author.username}, tu es ${Math.floor(Math.random() * 100)}% gay`);
    }
}