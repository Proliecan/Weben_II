const express = require('express')
const app = express()
const port = 80

let users = [{}]

app.get("/", (req,res)=>{
    for (let user of users){
        if (user.name == req.headers['user-agent']){
            user.count +=1
            res.write(`${user.count}`)
            return res.end()
        }
    }

    users.push({
        name: req.headers['user-agent'],
        count: 1
    })
    res.write(`1`)
    return  res.end()
})

app.listen(port)
console.log('server started on', port)