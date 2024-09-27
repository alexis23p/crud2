import express from 'express'

const app = express()
const puerto = 3000
app.listen(puerto,()=>{ 
console.log(`Hola${puerto}`)
})

