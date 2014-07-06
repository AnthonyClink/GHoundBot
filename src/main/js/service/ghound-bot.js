var fs = require('fs'),
    Irc = require('irc'),
    _ = require('lodash'),
    json = JSON,
    jsonUtil = require('../util/json-util.js')(fs, json),
    log = console.log;
    TwitchClient = require('../client/twitch-client.js')(_, Irc, jsonUtil, log);



function GHosthoundBot(config){
    var self = this,
        twitchClient = new TwitchClient(config);

    self.start = function(){
        twitchClient.connect();
    };

    self.on = function(event, cb){
        twitchClient.on(event, cb);
    };

    self.getConfiguredChannel = function(){
        return twitchClient.getConfiguredChannel();
    };

    self.say = function(destination, text, event){
        twitchClient.say(destination, text, event);
    };

    self.addListener = function(event, callback){
      twitchClient.addListener(event, callback);
    };
}


module.exports = GHosthoundBot;