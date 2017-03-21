
const http = require('http');
const httpRequest = require('./connect-api').httpRequest;

/*
    sendRequest - I am a the most imp function in this whole app.
                I take the name of the file and send a httpRequest 
                if I get an error of movie not found, I twerk the title a bit like as removing the words after a "." or " "
                and then send again the httpRequest until I dont get the desired result 
                or there is no scopt left of such twerking
 */


var sendRequest1 = function(fileName,i) {
    return httpRequest(fileName).then(function(data) {
        try{
        if (data.Error==="Movie not found!") {
            if (fileName.includes(".")) {
                var lastIndex = fileName.lastIndexOf(".");
            }
            if (fileName.includes(" ")) {
                var lastIndex = fileName.lastIndexOf(" ");
            }
            str = fileName.substring(0, lastIndex);
            if (str!==fileName) {
                return sendRequest1(str,i);
            }
            else {
                //console.log("Movie not found");
                throw new Error("Movie not found");
            }
        }
        else {
            //console.log("end result" + JSON.stringify(data, null, 4));
            data.fileNo= i;
            return data;
        }
    }catch(e){
        //return e;
        throw new Error(e);
    }
    }).catch(function(err){
       throw err;
    });
};








module.exports = {
    
    sendRequest1
};