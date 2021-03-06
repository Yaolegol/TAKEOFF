const express = require('express');
const path = require('path')

const projectRootPath = path.resolve(__dirname, '../')

const app = express();
app.use(express.static(path.resolve(projectRootPath, 'dist')))

app.get('/second', (req, res) => {
    res.sendFile(path.resolve(projectRootPath, 'dist','second.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(projectRootPath, 'dist','index.html'))
})

app.listen(process.env.PORT || 8000, () => console.log('!!!!!!!!!!!Server start at localhost:8000!!!!!!!!!!!'));
