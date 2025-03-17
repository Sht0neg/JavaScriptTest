const btn = document.querySelector(".btn-get")
const btn2 = document.querySelector(".btn-del")
const list = ["f.jpg", "s.jpg", "t.jpg", "fo.jpg"]
let i = -1;
btn.addEventListener("click", () => {
    console.log(i)
    i++
    if (i == 4) {
        i = 0
    }
    document.querySelector("img").setAttribute("src", list[i])
})
btn2.addEventListener("click", () => {
    console.log(i)
    i--
    if (i == -2) {
        i = 3
    }
    if (i == -1){
        i = 3
    }
    document.querySelector("img").setAttribute("src", list[i])
})
