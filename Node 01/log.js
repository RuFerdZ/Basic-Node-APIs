var log={
    logWarningMessage :function(message){
    console.log("Warning :"+message);

},

logErrorMessage :function(message){
    console.log("Error :"+message);

},

logInfoMessage :function(message){
    console.log("Info :"+message);

}
}
//logWarningMessage ("The app has crashed")
//logInforMessage ("The app has restart")
module.exports=log
/*module.exports.logWarningMessage = logWarningMessage;
module.exports.logErrorMessage = logErrorMessage;
module.exports.logInforMessage = logInforMessage;
module.exports.numberOfStudents = 100;*/

