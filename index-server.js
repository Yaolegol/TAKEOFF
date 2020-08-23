var exphbs = require('express-handlebars');
const express = require('express');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', 'src/views');

const router = require('./server/routes/router');

app.use(express.static('./dist'));
app.use(router);

app.listen(process.env.PORT || 8080, () => console.log('!!!!!!!!!!!Server start at localhost:8080!!!!!!!!!!!'));