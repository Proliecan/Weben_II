const express = require('express')
const app = express()
const port = 80

const eta = require('eta');
app.engine('html', eta.renderFile)
app.set('views', './')



app.get("/", (req, res) => {
    return res.render("calc.html", {
        result: "",
        operand1: "",
        operand2: "",
        operator: ""

    })
})

app.use(express.urlencoded({ extended: true }))
app.post("/", (req, res) => {
    let o1 = parseInt(req.body.operand1)
    let o2 = parseInt(req.body.operand2)
    let operator = req.body.operator
    let result = false
    if (operator == "+") result = o1 + o2
    if (operator == "-") result = o1 - o2
    if (operator == "*") result = o1 * o2
    if (operator == "/") result = o1 / o2
    if (result == false) return res.render("calc.html", {
        result: "Parsing error.",
        operand1: o1,
        operand2: o2,
        operator: operator
    })


    return res.render("./calc.html", {
        result: `${result}`,
        operand1: o1,
        operand2: o2,
        operator: operator
    })
})

app.listen(port)
console.log('server started on', port)