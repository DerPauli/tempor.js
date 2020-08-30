const Constants = require('discord.js').Constants;
const globals   = require('../global');


/*
    Module describes util helper functions for the discord bots
*/

createMeetingChannel = (client, name, type, topic, userLimit, rolesPermitted) => {

    options = {

        /* PartialChannelData */
        /* https://discord.js.org/#/docs/main/stable/typedef/PartialChannelData */
        /* use the permissionOverwrite attribute to overwrite single attributes for the channel */
        channels: [
            {
                name: name,
                type: type,
                topic: topic,
                nsfw: false,
                userLimit: userLimit,

            }
        ],

        /* PartialRoleData */
        /* https://discord.js.org/#/docs/main/stable/typedef/PartialRoleData */
        roles: [

            /* Create role here or use existing role data */

        ],
        defaultMessageNotifications: Constants.DefaultMessageNotifications.ALL,
        explicitContentFilter: Constants.ExplicitContentFilterLevel.ALL_MEMBERS,
        verificationLevel: Constants.VerificationLevel.LOW,
    };

    client.guilds.cache.create(name, options);
}

exports.createChannel = createChannel;