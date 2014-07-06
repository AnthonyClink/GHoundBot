function JsonUtil(fs, json){

    var self = this;

    self.getJSObjectFromJson = function(jsonData){

        var isAFile = fs.existsSync(jsonData);

        if(isAFile) {
            return json.parse(fs.readFileSync(jsonData, 'utf8'));
        }

        return json.parse(jsonData);
    };

    return self;
}

module.exports = JsonUtil;