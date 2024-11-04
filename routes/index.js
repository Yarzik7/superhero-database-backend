const { Router } = require('express');

const { superheroesRouter } = require('./superheroes');
const { superheroImagesRouter } = require('./superheroImages');

const router = Router();

router.use('/superheroes', superheroesRouter);
router.use('/superheroimages', superheroImagesRouter);

module.exports = router;
