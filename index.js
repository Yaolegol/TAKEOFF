const express = require('express');
const app = express();

app.use(express.static('../TAKEOFF'));

app.get('/', (req, res) => {    
    res.sendFile(__dirname + 'index.html');
});
app.get('/contacts', (req, res) => { 
    res.send('<h1>Contacts</h1>');    
    res.end();
});

app.listen(3000, () => console.log('Server start'));
