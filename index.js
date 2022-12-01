const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');

const app = express();
// const PORT = 3000;
let PORT = process.env.YOUR_PORT || process.env.PORT || 3000;


//Middleware
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());

//Rutas
app.get('/', (req, res) => {res.send('Bienvenidos a Express');});

const router = require('./router.js');
app.use(router);


app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`.bgGreen.black);
});