const express = require('express');
const app = express();

app.use(express.static('../TAKEOFF'));

app.get('/', (req, res) => {    
    res.sendFile(__dirname + 'index.html');
});

app.listen(3000, () => console.log('Hello'));
