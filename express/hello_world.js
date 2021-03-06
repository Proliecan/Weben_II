const express = require('express')
const app = express()
const port = 80
// const hostname = "owo.local"

app.get('/', (req, res)=>{
    return res.send("Hello World!")
})

app.put("/user", (req, res)=>{
    let chunks = []
    let temp
    let data
    req.on("data", (chunk => {
        chunks.push(chunk)
    }))
    req.on("end", () =>{
        temp = Buffer.concat(chunks)
        data = JSON.parse(temp)
        res.type("html").json(data)
    })
})

app.use(express.json())
app.post("/echo", (req, res) => {
    return res.send(req.body)
})

app.listen(port, /*hostname,*/ ()=>{
    console.log(`Server started on port ${port}` /* with hostname ${hostname} */)
})