const { Router } = require('express');

const { superheroesRouter } = require('./superheroes');

const router = Router();

router.use('/superheroes', superheroesRouter);

module.exports = router;
