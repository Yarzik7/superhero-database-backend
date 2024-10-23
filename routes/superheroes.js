const { Router } = require('express');
const { testControllers } = require('../controllers/testControllers');

const router = Router();

router.route('/').get(testControllers).post(testControllers);
router.route('/:id').get(testControllers).put(testControllers).patch(testControllers).delete(testControllers);

module.exports = { superheroesRouter: router };
