const express = require('express')
const app = express()
const port = 80

const eta = require('eta');
const req = require('express/lib/request');
app.engine('html', eta.renderFile)
app.set('views', './')


app.use(express.urlencoded({ extended: true }))
app.use(express.static("./images"))

app.get("/", (req, res) => {
    return res.render("calc.html", {
        result: "",
        operand1: "",
        operand2: "",
        operator: ""

    })
})

app.post("/", (req, res) => {
    let o1 = parseInt(req.body.operand1)
    let o2 = parseInt(req.body.operand2)
    let operator = req.body.operator

    // Easter egg
    if (o1 === 42 || o2 === 42)
        res.redirect("/white_mouse")

    let result = false
    if (operator == "+") result = o1 + o2
    if (operator == "-") result = o1 - o2
    if (operator == "*") result = o1 * o2
    if (operator == "/") result = o1 / o2
    if (result == false) res.redirect("/error")


    return res.render("./calc.html", {
        result: `${result}`,
        operand1: o1,
        operand2: o2,
        operator: operator
    })
})

app.get("/error", (req, res) => {
    return res.render("./error.html")
})
app.get("/white_mouse", (req, res) => {
    return res.render("./easteregg.html")
})


app.listen(port)
console.log('server started on', port)