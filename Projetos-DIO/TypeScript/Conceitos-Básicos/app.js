"use strict";
let buttonTest = document.getElementById('button');
function adicionarNumero() {
    console.log('funcionou!');
}
buttonTest === null || buttonTest === void 0 ? void 0 : buttonTest.addEventListener('click', () => {
    console.log('funcionou');
});
