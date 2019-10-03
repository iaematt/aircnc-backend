const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('your_mongo_url_here', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// GET, POST, PUT, DELETE
// request.query = Acessar query params (?)
// request.params = Acessar route params (para edição, delete)
// request.body = Acessar corpo da requisição 

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);


app.listen(3000);