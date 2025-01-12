const express = require('express')
const movieController = require('../controllers/movie-controllers')
const router = express.Router()

router.get('/', movieController.searchMovie)
router.get('/popular', movieController.getPopularMovies);

module.exports = router