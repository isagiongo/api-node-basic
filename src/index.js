const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (req, res) => {
    const { name } = req.query;
    console.log(name);
    return res.json([
        'Projeto1',
        'Projeto2',
        '3'
    ]);
});

app.post('/projects', (req, res) => {
    const body = req.body;
    console.log(body);
    return res.json([
        'Projeto1',
        'Projeto2',
        'Projeto3',
        'Projeto4'
    ]);
});

app.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    return res.json([
        'Projeto5',
        'Projeto2',
        'Projeto3',
        'Projeto4'
    ]);
});

app.delete('/projects', (req, res) => {
    return res.json([
        'Projeto5',
        'Projeto2',
        'Projeto4'
    ]);
});

app.listen(3000, () => {
    console.log('Backend Started 🥸');
});