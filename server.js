const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT | 3000

const { generateCat, generateLitter } = require('./genes.js')
const { stringifyCat } = require('./util.js')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    console.log("server.js: health check")
    try{
        res.send('Hello World!')
    }
    catch(e){
        console.log("server.js error: "+e)
    }  
})

// Generate a single cat
app.post('/cat',(req,res) => {
    console.log("server.js: generating cat")
    console.log(req.body)
    try{
        const {mum, dad} = req.body
        let kitten = generateCat(mum, dad)
        res.send(kitten)
    }
    catch(e){
        console.log("server.js error: "+e)
        res.status(400).send('Error generating cat')
    }
})

// Generate a litter of kittens
app.post('/litter',(req,res) => {
    console.log("server.js: generating litter")
    try{
        // if num is null, a random number (2-9) of kittens will be generated
        const {num, mum, dad} = req.body
        let kittens = generateLitter(mum, dad, num)
        res.send(kittens)
    }
    catch(e){
        console.log("server.js error: "+e)
        res.status(400).send('Error generating cat')
    }
})


app.listen(PORT, ()=>{console.log(`listening on port ${PORT}`)})