const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (req, res) => {
    const { title } = req.query;
    const result = title 
        ? projects.filter(project => project.title.includes(title))
        : projects;
    return res.json([result]);
});

app.post('/projects', (req, res) => {
    const { title, owner } = req.body;
    const id = uuid();
    const project = { id, title, owner };

    projects.push(project);

    return res.json(project);
});

app.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const { title, owner } = req.body;
    const projectIndex = projects.findIndex(project => project.id === id);
    
    if(projectIndex < 0) {
        return res.status(404).json({ error: `Project not found with id ${id}`});
    }

    const project = {id, title, owner};
    projects[projectIndex] = project;

    return res.json(project);
});

app.delete('/projects/:id', (req, res) => {
    const { id } = req.params;
    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return res.status(404).json({ error: `Project not found with ${id}`});
    }
    projects.splice(projectIndex, 1);

    return res.status(204).json([]);
});

app.listen(3000, () => {
    console.log('Backend Started 🥸');
});