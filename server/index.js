const express = require('express');
const app = express();

const router = require('./router');

app.use(express.static('./dist'));
app.use(router);

app.listen(process.env.PORT || 8080, () => console.log('!!!!!!!!!!!Server start at localhost:8080!!!!!!!!!!!'));