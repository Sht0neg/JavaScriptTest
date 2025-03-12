const user = {
    name: 'John Doe',
    age: 30,
}

const arr = ["Даниил", "Саша", "Олег"]

let {name, age} = user
let [first, ...second] = arr
console.log(name, age)
console.log(second)

function mySort(...els){
    els.sort()
    return els
}

console.log(mySort(98, 3, 23, 54, 54, 56))

const arrCommands = ["move", "right", "object"]

function doSome(action, arg1, arg2){
    console.log(`Я ${action} на ${arg1} предмет ${arg2}`)
}
doSome(...arrCommands)

let product = {
    titel: "Tomato",
    price: "100$",
    sort: "Cherry",
    info: function(){
        console.log(`Название ${this.titel}; Цена за штуку: ${this.price}`)
    },
    buy(){
        console.log("Вы купили помидорку и стали банкротом", this.price)
    }
}
product.info()
product.buy()

const basket = {
    buy: product.buy
}

basket.buy()

function printThis(){
    console.log(this)
}
printThis()

const arrowFunc = () => console.log(this)
arrowFunc()

const Rect = {
    width: 100,
    height: 100,
    s: () => Rect.width * Rect.height
}

console.log(Rect.s())

const group = {
    titel: "P21",
    students: ["Марк", "Даниил", "Артём", "Илья"],
    printStudents(){
        this.students.forEach((student) => console.log(student + " " + this.titel))
    }
}