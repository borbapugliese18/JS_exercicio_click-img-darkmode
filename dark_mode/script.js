function changeMode(){
    changeClasses();
    changeText()
}

function changeClasses() {
    button.classList.toggle("dark_mode")
    h1.classList.toggle("dark_mode")
    body.classList.toggle("dark_mode")
    footer.classList.toggle("dark_mode")
}

function changeText(){
    const lightMode = "Light Mode"
    const darkMode = "Dark Mode"

    if(body.classList.contains("dark_mode")){
        button.innerHTML = lightMode
        h1.innerHTML = darkMode + " ON"
        return
    }

    button.innerHTML = darkMode
    h1.innerHTML = lightMode + " ON"
}

const darkModeClass = "dark_mode"
const button = document.getElementById("mode_selector");
const h1 = document.getElementById("page_title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];


button.addEventListener("click", changeMode)