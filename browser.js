//document.getElementsByClassName("btn-move")[0]
const btn = document.querySelector("button")
//document.querySelectorAll()
btn.addEventListener("click", (event) =>{
    document.querySelector(".square").classList.toggle("square_active")
} )
