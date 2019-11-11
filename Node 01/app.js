var logger = require("./log");
var http = require("http");


//logger.logWarningMessage("App has Crached");
//logger.logErrorMessage("Not Started Up");

//console.log(logger.numberOfStudents);

var server =http.createServer((req,res) =>{
    if (req.url == "/pizza"){
        res.write("");
        res.end();
    }
    if (req.url == "/"){
        res.write("Hello World");
        res.end();
    }    
    });

    server.listen(5000);

