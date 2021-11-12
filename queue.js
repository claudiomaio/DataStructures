let queue = [];
const maxLength = 5;

function handleIsFull (){
    return alert ('Queue Is full');;
} 

function handleIsEmpty (){
    return alert ('Queue Is Empty');
} 


function isFull(queueLength, fullMaxlength){
    if (queueLength === fullMaxlength){
        return true;
    }
}

function isEmpty(queueLength){
    if ( queueLength === 0){
        return true; 
    }
}

function enQueue(myQueue, myMaxLength,value){
   return !isFull(myQueue.length,myMaxLength) ? myQueue.push(value) : handleIsFull();
}

function peekQueue(myQueue){
    return !isEmpty(myQueue.length) ? myQueue[0] : handleIsEmpty();
}

function deQueue(myQueue){
    return !isEmpty(myQueue.length) ? myQueue.shift() : handleIsEmpty();
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
