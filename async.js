

setTimeout(() => {
    console.log("Привет")
}, 2000)

setTimeout(() => {
    console.log("Привет 2")
}, 3000)

const promise = new Promise((resolve, reject) => {
    console.log("Start")
    setTimeout(() => resolve("Ok"), 1000)
})

promise.then((result) => console.log("It is a final of function: " + result))

function timeout(duration){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}

timeout(10000).then(() => console.log("Я немного подождал"))

async function getUrl() {
    const response = await fetch("https://catfact.ninja/fact")
    const data = await response.json()
    const { fact } = data
    console.log(fact)
}

getUrl()