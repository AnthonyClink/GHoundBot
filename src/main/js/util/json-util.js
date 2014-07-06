var fs = require('fs');

function readJson(fileName){
    var content = fs.readFileSync(fileName, 'utf8');
    return JSON.parse(content);
};

exports.readJson = readJson;