let stack = [];

function pushStack(myArry){
    if ( myArry.length === 5){
        return alert ('Stack Is full');   
    }
    return myArry.push(i = myArry.length + 1);
}

function peekStack(myArry){
    if ( myArry.length === 0){
        return alert ('Stack Is Empty');   
    } 
    return top = myArry.slice(-1)[0]
}

function popStack(myArry){
    if ( myArry.length === 0){
        return alert ('Stack Is Empty');   
    }    
    return myArry.pop() 
};

