let a = 1
console.log(-a)//Унарный оператор
console.log(a - 1)//Бинарный оператор

let s = "ж"
let label
if (s == "ж"){
    label = "Женщина"
}else{
    label = "Мужчина"
}

label = (s == "ж")? "Женщина" : "Мужчина"

let email = undefined
let valid_email = email ?? "Нет почты"//оператор нулевого слияния

print_hello()
//Function declaration
function print_hello(){
    console.log("Hello")
}

//fubction expression
let func = function(){
    console.log("Hi")
}
func()

function Worker(f){
    console.log("Work immitation")
    f()
}

Worker(func)

//стрелочная функция
let f = () => console.log("Hello")