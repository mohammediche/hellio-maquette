
const content = document.querySelector(".dropDownList");
const icon = document.querySelector(".dropDownIcon");
const button = document.querySelector(".dropDownButton");
const navList = document.querySelector(".nav-list");
// moon / sun image 
const darkMode = document.querySelector(".darkMode"); 
const whiteMode = document.querySelector(".whiteMode"); 
// mettre le texte en #fff
const p = document.querySelector(".rightSideSection p");
const description = document.querySelector(".description");
const titre = document.querySelector("h1");



// dropDown pour le button "je suis un professionnel"
const dropDown = ()=>{
    content.classList.toggle("showDropDownList");
    icon.classList.toggle("onClickDropDownIcon");
    button.classList.toggle("selected");
}

// ouvrir la Navigation
const openNav = ()=>{
    navList.classList.toggle("showNavListContent");
}

// function pour dark / white mode 

const darkAndWhiteMode = ()=>{
    darkMode.classList.toggle("moon");
    whiteMode.classList.toggle("sun");
    // changer le background du body
    document.body.classList.toggle("darkBody")
    p.classList.toggle("changingColor");
    description.classList.toggle("changingColor");
    titre.classList.toggle("secondColorOfTitle");
   
} 
