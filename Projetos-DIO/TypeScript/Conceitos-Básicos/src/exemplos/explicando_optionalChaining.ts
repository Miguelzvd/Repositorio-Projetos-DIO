let buttonTest = document.getElementById('button');

buttonTest?.addEventListener('click', ():void => { // '?' optional chaining: ignora a reclamação do null que o compilador faz
    console.log('funcionou')
});