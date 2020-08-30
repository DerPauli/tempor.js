'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();

const setup = require('./util/setup-bot.js');

require('dotenv').config();


/*
  dotenv
*/
const BOT_TOKEN = process.env.BOT_TOKEN;




client.on('ready', () => {
    setup(client);
    console.log('Bot running');
});


client.on('message', message => {
});


client.login(BOT_TOKEN);