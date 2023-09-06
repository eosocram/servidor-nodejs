//
import express from 'express';

const app = express();

app.use(express.json());

//mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suiça', grupo: 'G'},
    {id: 3, selecao: 'Sérvia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'},
];

//função aux. para ajudar na busca de dados por id
function BuscarSelecaoPorId(id) {
    return selecoes.filter( selecao => selecao.id == id)
};

//Pegar posição ou index do elemento no array por id
function BuscarIndexSelecao(id) {
    return selecoes.findIndex( selecao => selecao.id == id)
};

// rota raíz
app.get('/', (req, res) =>{
    res.send('O servidor js está rodando.')
}); 

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
});

app.get('/selecoes/:id', (req, res) => {
    //let index = req.params.id
        res.json(BuscarSelecaoPorId(req.params.id))
});

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção criada com sucesso')
});

app.delete('/selecoes/:id', (req, res) => {
    let index = BuscarIndexSelecao(req.params.id)  
    selecoes.splice(index, 1)
    res.send(`Seleção com id ${req.params.id} excluída com sucesso!`)
});

export default app;

