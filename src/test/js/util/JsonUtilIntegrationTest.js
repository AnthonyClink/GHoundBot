var json = JSON,
    fs = require('fs'),
    JsonUtil = require('../../../main/js/util/json-util.js'),
    expect = require('expect.js');

describe('json util integration tests', function(){

    var jsonUtil;

    before(function(){
        jsonUtil = new JsonUtil(fs,  json);
    });
    it('should be able to load the twitch-config-ghoundbot.json file', function(){
        var testConfig = jsonUtil.getJSObjectFromJson('src/test/resources/twitch-config-ghoundbot.json');
        expect(testConfig.nick).to.be('GHoundBot');
    });

    it('should be able to load a text string', function(){
        var data = '{\"nick\":\"GHoundBot\",\"userName\":\"GHoundBot\",\"channels\":[\"#gh0sthound\"],\"port\":\"6667\",\"server\":\"irc.twitch.tv\",\"password\":\"oauth:28e4awlsqupte3rcgodz6572lfenr27\",\"autoConnect\":false,\"debug\":true}';
        var testConfig = jsonUtil.getJSObjectFromJson(data);
        expect(testConfig.nick).to.be('GHoundBot');
    });

    it('should be able to load a config object', function(){
        var data = {
            "nick" : "GHoundBot",
            "userName" : "GHoundBot",
            "channels" : ["#gh0sthound"],
            "port" : "6667",
            "server" : "irc.twitch.tv",
            "password" : "oauth:28e4awlsqupte3rcgodz6572lfenr27",
            "autoConnect" : false,
            "debug" : true
        };

        var test
    });

});