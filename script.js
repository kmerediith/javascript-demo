const buttonBc = document.querySelector(".btn-bc");
const buttonTitle = document.querySelector("#btn-title");
const buttonCir = document.querySelector("#btn-circles");
const body = document.querySelector("body");
const mainTitle = document.querySelector("#main-title");

console.log({buttonBc, buttonCir, buttonTitle});

buttonBc.addEventListener("click",()=>{
    body.style.backgroundColor = "blue";
})

buttonTitle.addEventListener("click", ()=>{
    mainTitle.textContent= "I am hungry";
})

buttonCir.addEventListener("click",()=>{
    
})