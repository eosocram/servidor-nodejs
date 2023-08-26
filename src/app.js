//
import express from 'express';

const app = express();


// rota raíz
app.get('/', (req, res) =>{
    res.send('O servidor js está rodando.')
}); 

export default app;

