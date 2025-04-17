//Express import
const express = require('express')
//Create express object 
const app = express()
//Port
const port = 3000

//import posts router
const postsRouters = require('./routers/posts.js')

// Connect the posts router to /posts
app.use('/posts', postsRouters)

// Shows "Il mio blog" when visiting "/"
app.get('/', (req,res)=>{
    res.send('Il mio blog')
})

// Starts the server and logs the port
app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})