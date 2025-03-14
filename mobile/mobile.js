const btn = document.querySelector(".button_mobile")
btn.addEventListener("click", () =>{
    const header = document.querySelector("header")
    const nav = document.querySelector("nav")
    header.classList.toggle("header_active")
    nav.classList.toggle("nav_active")
})