

function TwitchOauthService(http, express, needle, log) {

    var self = this;

    var service = express();
    service.get('/twitch_oauth', handleOauthToken);
    self.server = http.createServer(service);

    self.start = function(){
        self.server.listen(8081);
        log("Twitch OAuth Service started");
    };

    function handleOauthToken(request, response) {
        log('Token: ' + JSON.stringify(request.query));
        response.send('hello world');
    }

}

module.exports = TwitchOauthService;