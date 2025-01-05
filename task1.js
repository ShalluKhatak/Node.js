let vary=0;
const intervalId=setInterval(()=>{
    console.log('`Hello` :>> ', `Hello`);
    vary++;
    if(vary===5) {
        clearInterval(intervalId);
        console.log('The program ends.');
    }; 
},1000)