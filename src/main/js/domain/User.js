module.exports = User;


function User(userData){
    var self = this;
    var data = userData;
}

User.prototype.getTwitchId = function(){
    return this.data._id;
};