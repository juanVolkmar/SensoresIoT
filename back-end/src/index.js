import express from 'express';
import userRouter from './routes/userRouter.js';

const app = express()
app.use(express.json())

const port = 3000

app.get('/ping', (_req, res) =>{
    console.log('someone pinged here!!')
    res.send('pong')
})

//Uso de las rutas
app.use('/api/users', userRouter)

app.listen(port, () =>{
    console.log(`Sever running on port ${port}`)

})