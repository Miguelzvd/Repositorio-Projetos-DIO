var add = document.getElementById('add');
var nome_item = document.getElementById('nome_item');
var list_item = document.getElementsByClassName('list')[0];
var checkbox = document.querySelectorAll('input[type=checkbox]');

console.log(checkbox);

add.addEventListener('click', add_item);

function add_item(){
    if(nome_item.value !== ""){
        let item = `<div><input type="checkbox"><span>${nome_item.value}</span></div>`;
        list_item.innerHTML += item;
    }
    nome_item.value = null;
}