const express = require('express');
const app = express();

const router = require('./server/routes/router');

app.use(express.static('./public'));

app.use(router);


app.listen(3000 || process.env.PORT, () => console.log('Server start'));