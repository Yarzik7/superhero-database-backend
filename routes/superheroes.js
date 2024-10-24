const { Router } = require('express');
const validateBody = require('../utils/validateBody.js');
const { createSuperheroValidationSchema } = require('../utils/validation/superheroValidationSchemas');
const {
  getAllSuperheroesController,
  getSuperheroByIdController,
  createSuperheroController,
  updateSuperheroByIdController,
  deleteSuperheroByIdController,
} = require('../controllers/superheroControllers');

const router = Router();

router
  .route('/')
  .get(getAllSuperheroesController)
  .post(validateBody(createSuperheroValidationSchema), createSuperheroController);
router
  .route('/:superheroId')
  .get(getSuperheroByIdController)
  .put(updateSuperheroByIdController)
  .patch(updateSuperheroByIdController)
  .delete(deleteSuperheroByIdController);

module.exports = { superheroesRouter: router };
