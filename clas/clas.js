class User{
    constructor(name, age){
        this.age = age
        this.name = name
    }

    printInfo(){
        console.log(`Имя: ${this.name}, возраст: ${this.age}`)
    }
}


const user = new User("Олег", 23)
user.printInfo()
console.log(User.prototype)

class Admin extends User{
    constructor(name, age, password){
        super(name, age)
        this.password = password
    }
}