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

app.post('/usuario',(req, res)=>{
    console.log(req.body)


    const newUser  = { ...req.body, id: usuarios.length +1 }

usuarios.push(newUser);
res.send('Se ha creado un usuario');
});

app.put('/usuario',(req, res)=>{
    console.log(req.body)
})

    app.delete ('/usuarios',(req, res)=>{
        console.log(req.body)
    })



app.listen(puerto,()=>{ 
console.log(`Hola${puerto}`)

})

