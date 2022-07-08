var currentNumberWrapper = document.getElementById('currentNumber');
var increment_ = document.getElementsByName('adicionar')[0];
var decrement_ = document.getElementsByName('subtrair')[0];

var currentNumber = 0;
var count_increment = 0;
var count_decrement = 0;

increment_.addEventListener('click', increment);
decrement_.addEventListener('click', decrement);

console.log("hello, world!")

function increment(){
    count_increment += 1;
    
    if (count_increment <= 10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        greater_than_0(currentNumber);
    }
}

function decrement(){
    count_decrement += 1;

    if (count_decrement <= 10){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        greater_than_0(currentNumber);
    }
}

function greater_than_0(number){
    if (number < 0){
        currentNumberWrapper.style.color = 'red';
    } 
    else{
        currentNumberWrapper.style.color = 'black';
    }
}
