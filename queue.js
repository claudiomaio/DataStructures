let queue = [];
let maxLength = 5;


function isFull(queueLength, fullMaxlength){
    if (queueLength === fullMaxlength){
        return true, alert ('Queue Is full');
    }
}

function isEmpty(queueLength){
    if ( queueLength === 0){
        return true, alert ('Queue Is Empty');
    }
}

function enQueue(myQueue, myMaxLength,value){
   return !isFull(myQueue.length,myMaxLength) ? myQueue.push(value) : undefined ;
}

function peekQueue(myQueue){
    return !isEmpty(myQueue.length) ? myQueue[0] : undefined;
}

function deQueue(myQueue){
    return !isEmpty(myQueue.length) ? myQueue.shift() : undefined;
};


enQueue(queue,maxLength,1);
enQueue(queue,maxLength,1);
enQueue(queue,maxLength,1);
enQueue(queue,maxLength,1);
enQueue(queue,maxLength,1);

console.log(queue);

console.log(peekQueue(queue))

deQueue(queue)
deQueue(queue)
deQueue(queue)
deQueue(queue)
deQueue(queue)

console.log(queue);
