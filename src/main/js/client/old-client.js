var irc = require('irc');

twitchConfig = {
    nick : 'GHoundBot',
    userName : 'GHoundBot',
    channels : ['#gh0sthound'],
    port : '6667',
    server : 'irc.twitch.tv',
    password : 'oauth:28e4awlsqupte3rcgodz6572lfenr27',
    autoConnect : false,
    debug : true
};


var client = new irc.Client(twitchConfig.server, twitchConfig.nick, twitchConfig);
client.getConfiguredChannel = function(){ return twitchConfig.channels[0] };

module.exports = client;