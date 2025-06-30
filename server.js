// Creo un server Express per servire i file statici
// e gestire le richieste per i post
const express = require('express');
const app = express();
const port = 3000;

// Middleware per il parsing del body delle richieste
app.use(express.static('public'));

// Rotte per il blog
app.get('/', (req, res) => {
    res.send('Questo è il server del mio blog!');
});

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});

app.get('/post/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Visualizza il post con ID: ${postId}`);
});