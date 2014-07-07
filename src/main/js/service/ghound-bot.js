var fs = require('fs'),
    Irc = require('irc'),
    _ = require('lodash'),
    needle = require('needle'),
    http = require('http'),
    express = require('express'),
    json = JSON,
    jsonUtil = require('../util/json-util.js')(fs, json),
    log = console.log,
    TwitchClient = require('../client/twitch-client.js')(_, Irc, jsonUtil, log),
    TwitchOauthService = require('./twitch-oauth-service.js');



function GHosthoundBot(chatConfig, oauthConfig){

    var chatConfigObject = jsonUtil.getJSObjectFromJson(chatConfig);
    var oauthConfigObject = jsonUtil.getJSObjectFromJson(oauthConfig);

    var self = this,
        twitchClient = new TwitchClient(chatConfigObject),
        twitchOauthService = new TwitchOauthService(oauthConfigObject, http, express, needle, console.log);

    self.start = function(){
        twitchOauthService.start();
        //twitchClient.connect();
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
