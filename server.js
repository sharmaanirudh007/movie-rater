
const fs = require('fs');
const http = require('http');

const httpRequest = require('./connect-api').httpRequest;
const sendRequest = require('./change-name').sendRequest1;

var path = process.argv[2];


//console.log(path);

 fs.readdir(path,(err,files)=>{
   if(err){

       console.log(err);
        return;}

        for(var i=0;i<files.length;i++){


          sendRequest(files[i], i).then(function (data) {

            var fileNo = data.fileNo;
            
            
        if(data.imdbRating){
             fs.rename(path + "/"+ files[fileNo] , path +"/" + "(-"+ data.imdbRating + "-) " + files[fileNo] ,function (err) {
               data = null;
              if(err) {return;};
              
              });
        } 



            }).catch(function(err){

            //console.log("we got the error");
            //console.log( err + "\n");
            });




         console.log((i+1) + " of " + files.length + " completed");

        }
        
    console.log(files);

    



 });

 


// }


// fixNameGetRating(files){

// }

//getRating('the incredibles');



var fileName = 'Before I Go to Sleep (2014) 720p BluRay x264 [Dual Audio] [Hindi 2.0 - English 2.0] Exclusive By -=!Dr.STAR!=-';

var res = fileName.split('.');

//console.log(res);


var getRatingFromData = function (data) { 

  return data.imdbRating;

 };












//sendRequest(fileName);