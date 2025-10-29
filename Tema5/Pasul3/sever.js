let express = require('express');

const app = express();

const arr = [
    {id: 1, nume: "obiect1"},
    {id: 2, nume: "obiect2"}
];

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    arr.forEach( el => {
        if(el.id === id)
            res.send(el);
    })
})

app.listen(3000, () => { console.log('Serverul a pornit pe portul 3000')});