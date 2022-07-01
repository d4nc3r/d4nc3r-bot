const dotenv = require('dotenv');
dotenv.config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  switch(msg.content) {
    case 'ping':
      msg.reply('pong');
      break;
  }
});

client.login(process.env.TOKEN);
