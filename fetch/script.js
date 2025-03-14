const btn = document.querySelector(".btn-get")
const list = ["f.jpg", "s.jpg", "t.jpg", "fo.jpg"]
let i = 0;
btn.addEventListener("click", () => {
    document.querySelector("img").setAttribute("src", list[i])
    i++
    if (i == 4) {
        i = 0
    }
})