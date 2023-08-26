import app from './src/app.js';
const port = 3000;

app.listen(port, () => {
    console.log(`O servidor está rodando no endereço http://localhost:${port}`)
});