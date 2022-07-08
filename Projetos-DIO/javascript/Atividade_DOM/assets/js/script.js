const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkModeClass = 'dark-mode';

button.addEventListener('click', darkMode);

function darkMode(){
    changeClasses();
    changeText();
}

function changeText(){

    const darkMode = "Dark Mode";
    const lightMode = "Light Mode";

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON"
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
    return;
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}