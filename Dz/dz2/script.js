const sidebar = document.querySelector('#sidebar');
const overlay = document.querySelector('#overlay');


const menu = document.querySelector(".menu-icon")
menu.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
})

overlay.addEventListener("click", () =>{
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
})