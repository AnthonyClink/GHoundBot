var twitch = require('./src/main/js/client/twitch-client.js');

twitch.on('error', function(e){
    throw e;
});

twitch.on('registered', function(o){
    console.log("Registered to the server: " + JSON.stringify(o));
});

twitch.on('join', function(channel, nick, message){
    console.log(nick + " joined " + channel + "(" + JSON.stringify(message) + ")");
    twitch.say(twitch.getConfiguredChannel(), nick + " joined the channel!");
});

twitch.on('part', function(channel, nick, reason, message){
    console.log(nick + " left + " + channel + " becuase " + reason + " msg: (" + message + ")");
});

twitch.on('message' + twitch.getConfiguredChannel(), function(nick, text, message){
    console.log(nick + ": " + text + "(" + JSON.stringify(message) + ")");
    twitch.say(twitch.getConfiguredChannel(), nick + " you said " + text);
});

twitch.connect();
