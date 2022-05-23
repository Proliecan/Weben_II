const express = require('express')
const app = express()
const port = 80

// Expose all files in that directory as 
// localhost/<filename>
app.use(express.static("./public"))

app.listen(port)
console.log('server started on', port)