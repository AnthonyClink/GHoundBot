function TwitchOauthService(twitchOauthConfig, http, express, needle, log) {

    var self = this;
    self.twwitchOAuthConfig = twitchOauthConfig;
    self.needleOps = {
        json : false,
        headers : {
            'Client-ID' : twitchOauthConfig.client_id
        }
    };

    var service = express();
    service.get('/twitch_oauth', handleOauthToken);
    self.server = http.createServer(service);

    self.start = function(){
        self.server.listen(8081);
        log("Twitch OAuth Service started");
    };

    function handleOauthToken(request, response) {
        var queryObject = request.query;
        response.set('Client-ID', twitchOauthConfig.client_id);
        response.send(200);

        needle.post('https://api.twitch.tv/kraken/oauth2/token', createNeedleBody(queryObject.code), self.needleOps, function(err, oauthResponse){

            if(err){
                throw err;
            }

            console.log(oauthResponse.statusCode)
            console.log(oauthResponse.body.access_token);

            var authenticatedOptions = {
                headers : {
                    accept : 'application/vnd.twitchtv.v2+json',
                    'Client-ID' : twitchOauthConfig.client_id,
                    'Authorization' : 'OAuth ' + oauthResponse.body.access_token
                }
            };

            needle.get('https://api.twitch.tv/kraken/user', authenticatedOptions, function(err, userResponse, content){
                if(err){
                    throw err;
                }

                console.log(content);
            });

        });

        function createNeedleBody(code){
            return {
                client_id : twitchOauthConfig.client_id,
                client_secret : twitchOauthConfig.client_secret,
                grant_type : twitchOauthConfig.grant_type,
                redirect_uri : twitchOauthConfig.redirect_uri,
                code : code
            }
        }

    }

}

module.exports = TwitchOauthService;