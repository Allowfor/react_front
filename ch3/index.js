const logEvents=require('./logEvents');
const EventEmitter =require('events');
class MyEmitter extends EventEmitter {};


const MyEmitter=new MyEmitter();


MyEmitter.on('log',(msg)=>logEvents(msg));

setTimeout(()=>{
    MyEmitter.emit('log','Log event  emmitted!');
},2000);