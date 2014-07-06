var JsonUtil = require('../util/json-util.js'),
    Irc = require('irc'),
    twitchConfig = JsonUtil.readJson('src/main/resources/twitch-config.json');

function Twitch(){
    var self = this;
    var config = twitchConfig;
}

Twitch.prototype.getConfiguredChannel = function(){
    return twitchConfig.channels[0];
};

module.exports = Twitch;