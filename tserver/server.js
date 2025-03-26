const express = require("express")
const app = express()

app.get("/", (req, res) =>{
    res.sendFile(`${__dirname}/index.html`)
})

app.use("/static/", express.static(__dirname))

app.get("/data", (req, res) => {
    res.json({data:"asdfdsf"})
})

app.listen(5000, () => console.log("http://127.0.0.1:5000"))