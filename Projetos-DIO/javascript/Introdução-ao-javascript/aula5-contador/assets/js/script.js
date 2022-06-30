var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
console.log("hello, world!")

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}