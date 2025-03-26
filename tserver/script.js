async function initData(params) {
    const response = await fetch("/data")
    const data = await response.json()
    document.querySelector(".load-content").textContent = data.data
}
initData()