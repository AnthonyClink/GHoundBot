var mongojs = require('mongojs'),
    db = mongojs("mongodb://localhost:27017/GHoundBotDB", ['users']);

function TwitchDBService(){
    var self = this;
    var users = db.users;

    self.saveUser = function(user){
       users.save(user);
    };

}

module.exports = TwitchDBService;