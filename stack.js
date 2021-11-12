let stack = [];
const maxLength = 5;

function handleIsFull (){
    return alert ('Stack Is full');
} 

function handleIsEmpty (){
    return alert ('Stack Is Empty');
} 

function isFull(arryLength, fullMaxlength){
    if (arryLength === fullMaxlength){
        return true;
    }
}

function isEmpty(arryLength){
    if ( arryLength === 0){
        return true;
    }
}

function pushStack(myArry, myMaxLength,value){
    return !isFull(myArry.length,myMaxLength) ? myArry.push(value) : handleIsFull();
}

function peekStack(myArry){
    return !isEmpty(myArry.length) ? myArry.slice(-1) : handleIsEmpty();
}

function popStack(myArry){
    return !isEmpty(myArry.length) ? myArry.pop() : handleIsEmpty();
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

