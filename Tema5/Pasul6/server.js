const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const arr = [
    {id: 1, nume: "Ana", varsta: 10},
    {id: 2, nume: "Andrei", varsta: 13},
    {id: 3, nume: "Maria", varsta: 11}
];

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const element = arr.find(e => e.id === id);
    res.json(element);
});

app.listen(3000, () => console.log("Serverul ruleaza pe portul 3000"));