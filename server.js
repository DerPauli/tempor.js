'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();



/*
  dotenv
*/
const BOT_TOKEN = process.env.BOT_TOKEN;




client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {

    if (message.content === 'ping') {
        message.channel.send('pong');
    }
});


client.login(BOT_TOKEN);