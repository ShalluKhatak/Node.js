// emitter:"Send email"
//on console-sending email

//after 5 second console-user name 

import EventEmitter from "events";
const myEmitter=new EventEmitter();

function sending(s) {

    console.log("Sending email.")

    setTimeout(()=>{
        console.log(`Send to ${s} :>> `);
    },5000)
}

myEmitter.on('send email',sending);
myEmitter.emit('send email','Shallu');