'use strict';

const Discord       = require('discord.js');
const client        = new Discord.Client();
const { google }    = require('googleapis');

/* discord helper functions */
const setup = require('./util/setup-bot.js');


/* integrations */
const gapi = require('./integrations/google/main');



/* dotenv */
require('dotenv').config();

const BOT_TOKEN = process.env.BOT_TOKEN;




client.on('ready', () => {
    setup(client);
    console.log('Bot running, setup google API');


    

    gapi.ready((auth) => {

    const calendar = google.calendar({version: 'v3', auth});

    calendar.events.list({
        
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime'

    }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        
        const events = res.data.items;
        if (events.length) {
            console.log('Upcoming 10 events:');
            events.map((event, i) => {
                const start = event.start.dateTime || event.start.date;
                console.log(`${start} - ${event.summary}`);
            });
        }
        else {
            console.log('No upcoming events found.');
        }
    });
    });

});


client.on('message', message => {
});


client.login(BOT_TOKEN);