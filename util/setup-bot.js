
module.exports = (client) => {

    client.user.setPresence({
        game: { 
            name: 'Meetings',
            type: 'STREAMING'
        },
        status: 'idle'
    });

    client.user.setStatus("idle");
    
}