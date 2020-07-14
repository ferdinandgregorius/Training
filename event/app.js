const EventEmitter = require('events');
const emitter = new EventEmitter();

//register listener
emitter.on('messageLoad', function(arg){
    console.log('Listener Called');
});

//raise event
//emitter.emit('messageLoad',1,'http://herberthendrik.com');
//emitter.emit('messageLoad', {id:1, url: 'http://herberthendrik.com'});
const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', function(arg){
    console.log('Listener called', arg);
});

Logger('this is a test message');