const EventEmitter = require('events');

var url ="http://sguloggingservice.com/log";

class Logger extends EventEmitter{
    log(message){
        //send an HTTP request
        console.log(message);

        //raise an event
        //emitter.emit('messageLoad', 1, 'http://herbethendrik.com");
        this.emit('messageLogged', {id: 1, url: 'http://herberthendrik.com'});
    }
}
module.exports=Logger;