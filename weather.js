const accessKey = 'b417733f-09a0-48c2-b9e5-3e4e277c86f1';

const headers = {
    'X-Yandex-Weather-Key': accessKey
};

//let l = document.querySelectorAll("img")
//let l1 = document.querySelectorAll("p")

async function getUrl(){
    const response = await fetch('https://api.weather.yandex.ru/v2/forecast?lat=52.37125&lon=4.89388&limit=2&hours=false', { headers })
    const data = await response.json()
    const { parts } = data["forecasts"][1]
    k = 0
    j = 0
    for (let i in parts){
        if(k != 2){
            if (k >= 3) {j = k - 1}
            else {j = k}
            //l[j].setAttribute("src", `https://yastatic.net/weather/i/icons/funky/dark/${parts[i]["icon"]}.svg`)
            console.log(parts[i]["icon"])
            if (parts[i]["temp_avg"]){
                //li[j].textContent = li[j].textContent + ` ${parts[i]["temp_avg"]}`
                console.log(parts[i]["temp_avg"])
            }
            else{
                //li[j].textContent = li[j].textContent + ` ${parts[i]["temp"]}`
                console.log(parts[i]["temp"])
            }
        }
        k++
    }
    console.log(k)
}

getUrl()
