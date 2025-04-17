//Express import
const express = require('express')
//Create express object 
const app = express()
//Port
const port = 3000

// Shows "Il mio blog" when visiting "/"
app.get('/', (req,res)=>{
    res.send('Il mio blog')
})

// Starts the server and logs the port
app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})