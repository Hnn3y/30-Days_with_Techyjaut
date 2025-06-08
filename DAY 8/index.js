import express from "express";
import morgan from "morgan"
import fs from 'fs';

const app = express();
const PORT = 3000;

const data = fs.readFileSync('./public/notes.json', 'utf-8');
const notes = JSON.parse(data);

app.use(morgan("tiny"));

app.get('/notes', (req, res) => {
    res.json(notes)
});

app.get('/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find(n => n.id === id);
    
    if (note) {
        res.json(note);
    } else {
        res.status(404).json({error: 'Not Found'});
    }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/notes`)
});