const express = require("express")
const app = express()

app.get("/", (req, res) =>{
    res.sendFile("C:/Users/Artem/JavaScriptTest/index.html")
    res.sendFile("C:/Users/Artem/JavaScriptTest/browser.js")
})

app.listen(5000, () => console.log("http://127.0.0.1:5000"))