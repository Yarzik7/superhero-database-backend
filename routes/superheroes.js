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
const { createImage } = require('../controllers/superheroImagesController.js');
const uploadImagesHandler = require('../middlewares/uploadImagesHandler');

const router = Router();

router
  .route('/')
  .get(getAllSuperheroesController)
  .post(validateBody(createSuperheroValidationSchema), createSuperheroController);

router
  .route('/:superheroId')
  .get(validateObjectIdHandler, getSuperheroByIdController)
  .put(validateObjectIdHandler, updateSuperheroByIdController)
  .patch(validateObjectIdHandler, validateBody(updateSuperheroValidationSchema), updateSuperheroByIdController)
  .delete(validateObjectIdHandler, deleteSuperheroByIdController);

router.route('/superheroimages').post(uploadImagesHandler.single('superhero_image'), createImage);

module.exports = { superheroesRouter: router };
