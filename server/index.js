const express = require('express');
const router = require('./router');

const app = express();

app.use(express.static('./dist'));
app.use(router);

app.listen(process.env.PORT || 8080, () => console.log('!!!!!!!!!!!Server start at localhost:8080!!!!!!!!!!!'));
