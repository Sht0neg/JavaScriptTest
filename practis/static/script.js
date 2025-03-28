const input = document.querySelector("input")
const modal = document.querySelector(".modal")
const img = document.querySelector(".modali")

async function initData(params) {
    const response = await fetch("/data")
    const data = await response.json()
    function loadData(i){
        const divC = document.createElement("div")
        divC.classList.add("cart")
        document.querySelector("main").append(divC)
        const containerPath = document.querySelectorAll(".cart")
        console.log(containerPath.length)
        const container = containerPath[containerPath.length - 1]
        const img = document.createElement("img")
        img.classList.add("good")
        img.setAttribute("src", `/static/${data[i].Good}`)
        const name = document.createElement("p")
        name.classList.add("name")
        name.textContent = data[i].Name
        const count = document.createElement("p")
        count.classList.add("count")
        count.textContent = data[i].Count + " шт"
        const price = document.createElement("p")
        price.classList.add("price")
        price.textContent = data[i].Price + " руб"
        const btn = document.createElement("button")
        btn.textContent = "В корзину"
        container.append(img, name, count, price, btn)
    }
    document.querySelector("main").innerHTML = ""
    if (input.value == ""){
        for (let i in data){
            loadData(i)
        }
    }
    else{
        for (let i in data){
            if (data[i].Name.toLowerCase().includes(input.value.toLowerCase())){
                loadData(i)
            }
        }
    }
    const imgs = document.querySelectorAll(".good")

    imgs.forEach(image => {
        console.log("fhd")
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
}

input.addEventListener("change", () => {
    initData()
})

initData()


console.log(imgs)
