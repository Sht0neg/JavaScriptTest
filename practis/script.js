const modal = document.querySelector(".modal")
const img = document.querySelector(".modali")
const imgs = document.querySelectorAll(".good")

imgs.forEach(image => {
    image.addEventListener("click", () =>{
        img.setAttribute("src", image.getAttribute("src"))
        modal.classList.add("modalp")
    }) 
})

modal.addEventListener("click", (ev) =>{
    if (ev.target != img){
        modal.classList.remove("modalp")
    }
})