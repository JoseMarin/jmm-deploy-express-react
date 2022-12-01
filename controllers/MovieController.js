//Importo modelo de datos
const movies = require('../models/MovieModel');

const MovieController = {};

MovieController.getAll = (req, res) => {
    res.json(movies.findAll());
};

MovieController.getById = (req, res) => {
    const id = req.params.id;
    res.json(movies.findById(id));
}

MovieController.create = (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const movie = {id, title};
    res.json(movies.post(movie));
};

MovieController.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(MovieModel.update({id, ...body}));
};

MovieController.delete = (req, res) => {
    const {id} = req.params;
    res.json(MovieModel.delete(id));
};


module.exports = MovieController;