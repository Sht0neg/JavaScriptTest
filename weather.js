const accessKey = 'b417733f-09a0-48c2-b9e5-3e4e277c86f1';

const headers = {
    'X-Yandex-Weather-Key': accessKey
};

async function getUrl(){
    const response = await fetch('https://api.weather.yandex.ru/v2/forecast?lat=52.37125&lon=4.89388&limit=2&hours=false', { headers })
    const data = await response.json()
    const { parts } = data["forecasts"][1]
    k = 0
    for (let i in parts){
        console.log(parts[i])
        k++
    }
    console.log(k)
}

getUrl()

