//Express import
const express = require('express')

// Create a new router
const router = express.Router()

//import post array
const postList = require('../posts')

//INDEX
router.get('/', (req, res) =>{
    // res.send(`Lista dei post`)
    res.json(postList)
})

//SHOW
router.get('/:id', (req,res) =>{
    //res.send(`Dettaglio del post: ${req.params.id}`)
    const id = req.params.id
    const filtred  = postList.find((post) => post.id == id)
    res.json(filtred)
})

//STORE
router.post('', (req, res) =>{
    res.send('Inserimento di un nuovo post')
})

//UPDATE
router.put('/:id', (req, res)=>{
    res.send(`Modifica totale del post: ${req.params.id}`)
})

//MODIFICA PARZIALE
router.patch('/:id',(req,res)=>{
    res.send(`Modifica parziale del post: ${req.params.id}`)
})

//DESTROY
router.delete('/:id', (req,res)=>{
    res.send(`Cancellazione del post: ${req.params.id}`)
})

//Export router
module.exports = router
