var JsonUtil = require('json-util.js');


var ClinkworksUtils = {};

ClinkworksUtils.prototype.readJsonFromFile = JsonUtil.readJson;

module.exports = ClinkworksUtils;