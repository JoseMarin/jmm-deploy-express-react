const MovieRouter = require('./views/MovieRouter');
const router = require('express').Router();

//Rutas
router.use('/movies', MovieRouter);

module.exports = router;