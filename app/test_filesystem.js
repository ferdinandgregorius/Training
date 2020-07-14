const fs = require('fs');

//fs.readdirSync('./');
//console.log(files);

fs.readdir('./', function (error, files) {
    if(error){
        console.log("Error occurred. Error message: "+error);
    }
    else {
        console.log("Files in this directory are: "+files);
    }
});