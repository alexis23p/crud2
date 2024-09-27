import express from 'express'
app.use(express.json())

const app = express()
const puerto = 3000

let usuarios = [{
"id":1,
"nombre": "maria lopez",
"edad":26,
}]

app.get('/usuario',(req, res) =>{
res.json(usuarios)
})

app.post('/usuarios',(req, res)=>{
    console.log(req.body)
});
const newUser={...req.body, id:usuarios.length +1}

app.listen(puerto,()=>{ 
console.log(`Hola${puerto}`)
})

