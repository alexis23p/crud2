import express from 'express'

const app = express()
app.use(express.json())
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

app.put('/usuarios',(req, res)=>{
    console.log(req.body)})

    app.delete ('/usuarios',(req, res)=>{
        console.log(req.body)
    })

const newUser={...req.body, id:usuarios.length +1}

app.listen(puerto,()=>{ 
console.log(`Hola${puerto}`)
})
