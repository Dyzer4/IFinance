let botao = document.getElementsByClassName("menu-toggle")
let menu = document.getElementById("menu")

botao.addEventListener("click" , function(){
    menu.classList.toggle("hidden")
})