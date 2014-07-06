
function container(_, Irc, jsonUtil, log){

    function TwitchClient(config) {
        var self = this,
            twitchConfig = config,
            ircClient;

        if ('string' === typeof config) {
            twitchConfig = jsonUtil.getJSObjectFromJson(config);
        }

        self.getConfiguredChannel = function () {
            return twitchConfig.channels[0];
        };

        self.getIrcClient = function() {
            if(undefined === ircClient) {
                ircClient = new Irc.Client(twitchConfig.server, twitchConfig.nick, twitchConfig);
            }
            return ircClient;
        };

        self.connect = function(){
            self.getIrcClient().connect();
        };

        self.on = function(event, callback){
            self.getIrcClient().on(event, callback);
        };

        self.addListener = function(event, callback){
            self.getIrcClient().addListener(event, callback);
        };

        self.say = function(destination, text, event){
            self.getIrcClient().say(destination, text);
            log(event);
        };
    }

    return TwitchClient;

}

module.exports = container;
module.exports.TwitchClient = function(_, Irc, JsonUtil, clientConfigPath){
    return new container(_, Irc, JsonUtil)(clientConfigPath);
};