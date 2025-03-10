let o = {
    name: "Vasilyi",
    age: 12,
    address:{
        town: "Balashiha",
        country: "Russia"
    }
}
o.money = 12

delete o.money

let o2 = {}

Object.assign(o2, o)

o2.name = "Masha"
o2.address.town = "Moscow"
console.log(o)
console.log(o2)

const user={
    name:"Oleg",
}
user.name = "Alex"
console.log(user.name)

for (let key of Object.entries(o)){
    console.log(key)
}

let stname = "Mark"
const student = {stname}

console.log(student)

let addressSegment = "town"
console.log(o.address[addressSegment])
