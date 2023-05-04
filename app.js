const navbtn=document.querySelector(".navbtn");
const header=document.querySelector(".main");
const about=document.querySelector(".about");

const toggleNav=()=>{
    header.classList.toggle("active")
}
const toggleab=()=>{
    about.classList.toggle("active")
}

navbtn.addEventListener("click",()=>toggleNav())
navbtn.addEventListener("click",()=>toggleab())