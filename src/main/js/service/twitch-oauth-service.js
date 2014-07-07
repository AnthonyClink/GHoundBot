function TwitchOauthService(http, log) {

    var self = this;

    self.server = http.createServer(function (request, response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Thank you!\n");
    });

    self.start = function(){
        self.server.listen(8081);
        log("Twitch OAuth Service started");
    };

}

module.exports = TwitchOauthService;