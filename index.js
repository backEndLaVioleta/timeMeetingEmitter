// importamos eventEmitter
// debemos crear dos listeners y un evenento
//  evento uno: 100 - 1
// evento dos 1 - 100
// same num

 import EventEmitter from 'events';

// emisor
const emitter = new EventEmitter();
// properties
let sumOne = 1;
let restOne = 100;
let eachSecond = true;

// listeners
const handLerOne = ()=>{
    if(eachSecond){
        console.log('count down', restOne);
        restOne--;
    }
    // se convierte en true en cada
eachSecond = !eachSecond;
}

const handlerHalf = ()=> {
    if(sumOne == restOne){
        clearInterval(id);
        emitter.removeAllListeners();
    }else {
        console.log('count up',sumOne);
        sumOne++;
    }

}
emitter.on('count',handlerHalf);
emitter.on('count',handLerOne);

// colocamos al emisor en una constante y así podemos llamarlo y pararlo
const id = setInterval(_=>emitter.emit('count'),500);
