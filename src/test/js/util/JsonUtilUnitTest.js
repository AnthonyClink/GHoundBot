var JsonUtil = require('../../../main/js/util/json-util'),
    expect = require('expect.js'),
    sinon = require('sinon');

describe('JsonUtil', function(){

    var readFileSync, json, fs, jsonUtil, readFileSync, existsSync, parse;

    beforeEach(function(){
        fs = {};
        json = {};

        fs.readFileSync = function(fileName, encoding){
            return "{\"TEST\":\"DATA\"}";
        };

        fs.existsSync = function(fileName){
            return true;
        };

        json.parse = function(jsonString){
          return {TEST : 'DATA'}
        };

        readFileSync = sinon.spy(fs, 'readFileSync');
        existsSync = sinon.spy(fs, 'existsSync');
        parse = sinon.spy(json, 'parse');
        jsonUtil = new JsonUtil(fs, json);

    });

    it('should use the fs.readFileSync when file path is passed', function(){

        var actualJson = jsonUtil.getJSObjectFromJson("a/file/path/containing/data.json", "UTF8");

        expect(readFileSync.calledOnce).to.be(true);
        expect(existsSync.calledOnce).to.be(true);
        expect(parse.calledOnce).to.be(true);

        expect(actualJson.TEST).to.be('DATA');
    });


    it('should not call fs.readFileSync when the parameter could be a json string', function(){

        fs.existsSync = function(fileName){
            return false;
        };

        existsSync = sinon.spy(fs, 'existsSync');

        var actualJson = jsonUtil.getJSObjectFromJson('some possible json');

        expect(readFileSync.calledOnce).to.be(false);
        expect(existsSync.calledOnce).to.be(true);
        expect(parse.calledOnce).to.be(true);
        expect(actualJson.TEST).to.be('DATA');

    });

    it('should give a good error message when invalid values are passed')
});

