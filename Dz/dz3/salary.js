let value = []
for (let i = 0; i < 3; i++){
    value.push({
        "name": `product${i}`,
        "count" : i + 5,
        "buy" : false
    })
}
value[1]["buy"] = true

function print (value){
    value.forEach(i => {
        if(i["buy"] == true){
            console.log(`Название продукта: ${i["name"]}, кол-во: ${i["count"]}, уже куплен`)
        }
    });
    value.forEach(i => {
        if(i["buy"] == false){
            console.log(`Название продукта: ${i["name"]}, кол-во: ${i["count"]}, ещё не куплен`)
        }
    });
}

function addProduct(value, product, count){
    let flag = true
    for (let i of value){
        console.log(i["name"])
        if (i["name"] == product){
            i["count"] = i["count"] + count
            flag = false
        }
    }
    if (flag){
        value.push({
            "name": product,
            "count" : count,
            "buy" : false
        })
    }
}

print(value)
console.log()
addProduct(value, "product4", 50)
addProduct(value, "product2", 10)
print(value)