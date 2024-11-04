const { Router } = require('express');
const validateBody = require('../utils/validateBody.js');
const validateObjectIdHandler = require('../middlewares/validateObjectIdHandler.js');
const {
  createSuperheroValidationSchema,
  updateSuperheroValidationSchema,
} = require('../utils/validation/superheroValidationSchemas');

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
  .get(validateObjectIdHandler('superheroId'), getSuperheroByIdController)
  .put(validateObjectIdHandler('superheroId'), updateSuperheroByIdController)
  .patch(validateObjectIdHandler('superheroId'), validateBody(updateSuperheroValidationSchema), updateSuperheroByIdController)
  .delete(validateObjectIdHandler('superheroId'), deleteSuperheroByIdController);

module.exports = { superheroesRouter: router };
