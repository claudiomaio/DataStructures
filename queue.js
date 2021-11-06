let queue = [];

function enQueue(myQueue){
    if ( myQueue.length === 5){
        return alert ('Stack Is full');   
    }
    return myQueue.push(i = myQueue.length + 1);
}

function peekQueue(myQueue){
    if ( myQueue.length === 0){
        return alert ('Stack Is Empty');   
    } 
    return top = myQueue.slice(-1)[0]
}

function deQueue(myQueue){
    if ( myQueue.length === 0){
        return alert ('Stack Is Empty');   
    }    
    return myQueue.shift() 
};