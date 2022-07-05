const url_base = 'https://api.thecatapi.com/v1/images/search';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const capturaUrl = async() => {
    const data = await fetch(url_base)
        .then((res)=> res.json())
        .catch((e) => console.log(e))

    return data[0].url;
}

const carregaImagem = async() =>{
    catImg.src = await capturaUrl();
}

catBtn.addEventListener('click', carregaImagem);

carregaImagem();
