let names = ["Андрей", "Иван", "Петя", "Дима"]
let surnames = ["Сизов", "Петров", "Макаров", "Иванов"]
let final = []
let symbols = ["А", "Б", "В", "Г", "Д"]

for (let i = 0; i < names.length; i++){
    final.push(`${surnames[i]} ${names[i]}`)
}

final = final.filter((people) => symbols.includes(people.split(" ")[1][0]))
final = final.sort((people1, people2) => {
    if (people1.split(" ")[0] > people2.split(" ")[0]) {
        return 1
    }
    return -1
})

console.log(final)