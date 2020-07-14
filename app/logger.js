var url = "http://mylogger.io/log"; //dummy url
function DisplayLog(log_message) {
    console.log(`log message: ${log_message}`);
}

function DisplayURL(log_url) {
    console.log(`log URL: ${log_url}`);
}

module.exports.Logdisplay=DisplayLog;
module.exports.URLdisplay=DisplayURL;

DisplayLog("Test node app");