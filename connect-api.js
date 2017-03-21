var http = require('http');


var a = 2;


//httpRequest - I am a promise, call me with no arguments coz right now i got my own url
//              I will give u error in reject , but careful
//              in then function, always check for argument.error=="Movie not found!"
//              coz thats an error too ;) 
//              and if everything worked fine, I will give u the data i got from the api


var httpRequest = function (url) {  

    var p1 = new Promise(function (resolve,reject){

        //url = "sdsds";
        
        var path = 'http://www.omdbapi.com/?t='+ url;
        http.get(path, (res) => {
            const statusCode= res.statusCode;
            const contentType= res.headers['content-type'];

            let error;

            if(statusCode!==200){
                error= new Error('Request Failed.\n` +`Status Code: ${statusCode}');
            }
            else if(!/^application\/json/.test(contentType)){
                 error = new Error(`Invalid content-type.\n` +
                         `Expected application/json but received ${contentType}`);
            }

            if(error){
                //console.log(error.message);
                res.resume();
                reject(error);
            }

            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => rawData += chunk);
            res.on('end', () => {
            try {
             let parsedData = JSON.parse(rawData);
             //console.log("parse data"+ JSON.stringify(parsedData,null,4));
             //resolve(parsedData);
             resolve(parsedData);
                 } catch (e) {
             //console.log(e.message);
            reject(e);
             }
         });
         }).on('error', (e) => {
         //console.log(`Got error: ${e.message}`);
        });
            

        

    });  

    return p1;
}



module.exports = {
    httpRequest
};