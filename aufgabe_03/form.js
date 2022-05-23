const express = require('express')
const app = express()
const port = 80

// Register template engine "eta"
const eta = require('eta');
app.engine('html', eta.renderFile)
app.set('views', './views')

// Read form data form body
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    return res.render("form.html", {name: ""})
})

app.post("/", (req, res)=>{
    return res.render("form.html", {name: req.body.name})
})

app.listen(port)
console.log('server started on', port)
