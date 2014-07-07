var GHoundBot = require('./src/main/js/service/ghound-bot.js'),
    bot = new GHoundBot('src/main/resources/twitch-config-clinkworks-test.json', 'src/main/resources/twitch-oauth-config.json'),
    MongoDBService = require('./src/main/js/service/twitch-db-service.js'),
    db = new MongoDBService();

bot.on('error', function(e){
    throw e;
});

bot.on('registered', function(o){
    console.log("Registered to the server: " + JSON.stringify(o));
});

bot.on('join', function(channel, nick, message){
    console.log(nick + " joined " + channel + "(" + JSON.stringify(message) + ")");
    bot.say(bot.getConfiguredChannel(), nick + " joined the channel!");
});

bot.on('part', function(channel, nick, reason, message){
    console.log(nick + " left + " + channel + " becuase " + reason + " msg: (" + message + ")");
});

bot.addListener('message' + bot.getConfiguredChannel(), function(nick, text, message){
    console.log(nick + ": " + text + "(" + JSON.stringify(message) + ")");
    bot.say(bot.getConfiguredChannel(), 'Hey ' + nick + ' you said: ' + text);
});

bot.start();

