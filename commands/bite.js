module.exports = {
    name: 'bite',
    execute(message, args) {
        message.channel.send(`${message.author.username}, ta bite mesure ${Math.floor(Math.random() * 25)}cm`);
    }
}