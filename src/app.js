//
import express from 'express';

const app = express();

//mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suiça', grupo: 'G'},
    {id: 3, selecao: 'Sérvia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'},
];

// rota raíz
app.get('/', (req, res) =>{
    res.send('O servidor js está rodando.')
}); 

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

export default app;

