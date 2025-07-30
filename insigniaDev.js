const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
    console.log(`Bot online como ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.reply('🏓 Pong!');
    }
});

client.login('MTExNzk4MTE2Njk3NzQxNzMzNg.GJS4mh.3e9Sd8DUgitUIuWXc1jJw_GlY9Fdgbp8PLorFA'); // Substitua pelo token do seu bot
