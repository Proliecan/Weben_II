const express = require('express');
const app = express()
const d = new Date()

app.get('*', (req, res) => {
    let url = req.url
    res.write(`Hello World from GET!\n${url}\nThe clock says ${d.toLocaleTimeString()}.`)
    res.end()
})

app.use(express.text())
app.post("*", (req, res)=>{
    let body = req.body
    res.write(`Hello Wold from POST!\n${body}\nThe clock says ${d.toLocaleTimeString()}.`)
    res.end()
})

app.listen(80)