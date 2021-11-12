let stack = [];
const maxLength = 5;

function isFull(arryLength, fullMaxlength){
    if (arryLength === fullMaxlength){
        alert ('Stack Is full');
        return true;
    }
}

function isEmpty(arryLength){
    if ( arryLength === 0){
        alert ('Stack Is Empty');
        return true;
    }
}

function pushStack(myArry, myMaxLength,value){
    return !isFull(myArry.length,myMaxLength) ? myArry.push(value) : undefined ;
}

function peekStack(myArry){
    return !isEmpty(myArry.length) ? myArry.slice(-1) : undefined;
}

function popStack(myArry){
    return !isEmpty(myArry.length) ? myArry.pop() : undefined;
};

pushStack(stack,maxLength,1);
pushStack(stack,maxLength,1);
pushStack(stack,maxLength,1);
pushStack(stack,maxLength,1);
pushStack(stack,maxLength,1);


console.log(peekStack(stack));

console.log(stack);

popStack(stack);
popStack(stack);
popStack(stack);
popStack(stack);
popStack(stack);

console.log(stack);
