var currentNumberWrapper = document.getElementById('currentNumber');
var increment_ = document.getElementsByName('adicionar')[0];
var decrement_ = document.getElementsByName('subtrair')[0];
var currentNumber = 0;

increment_.addEventListener("click", increment);
decrement_.addEventListener("click", decrement);

console.log("hello, world!")

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    greater_than_0(currentNumber);
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    greater_than_0(currentNumber);
}

function greater_than_0(number){
    if (number < 0){
        currentNumberWrapper.style.color = 'red';
    } 
    else{
        currentNumberWrapper.style.color = 'white';
    }
}
