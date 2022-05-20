const express = require('express')
const app = express()
const port = 80
// const hostname = "owo.local"

app.get('/', (req, res)=>{
    return res.send("Hello World!")
})

app.listen(port, /*hostname,*/ ()=>{
    console.log(`Server started on port ${port}` /* with hostname ${hostname} */)
})