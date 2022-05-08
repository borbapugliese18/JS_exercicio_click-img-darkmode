function changeMode(){
    changeClasses();
}

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        return json.webpurl;
    } 
    catch(e){
        console.log(e.message); 

    }
}

const loadImg = async () => {
    catImg.src = await getCats();
}

loadImg();


function changeClasses() {
    button.classList.toggle("dark_mode")
    h1.classList.toggle("dark_mode")
    body.classList.toggle("dark_mode")
    catBtn.classList.toggle("dark_mode")
}


const darkModeClass = "dark_mode"
const button = document.getElementById("icon");
const h1 = document.getElementById("title");
const body = document.getElementsByTagName("body")[0];

catBtn.addEventListener('click', loadImg);
button.addEventListener("click", changeMode)




