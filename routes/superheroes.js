const { Router } = require('express');
const validateBody = require('../utils/validateBody.js');
const validateObjectIdHandler = require('../middlewares/validateObjectIdHandler.js');
const {
  createSuperheroValidationSchema,
  updateSuperheroValidationSchema,
} = require('../utils/validation/superheroValidationSchemas');
// const {
//   createSuperheroImagesValidationSchema,
//   deleteSuperheroImagesValidationSchema,
// } = require('../utils/validation/superheroImagesValodationSchemas');
const {
  getAllSuperheroesController,
  getSuperheroByIdController,
  createSuperheroController,
  updateSuperheroByIdController,
  deleteSuperheroByIdController,
} = require('../controllers/superheroControllers');
const { createImage, deleteImage } = require('../controllers/superheroImagesController.js');
// const uploadImagesHandler = require('../middlewares/uploadImagesHandler');

const router = Router();

router.route('/').get(getAllSuperheroesController).post(createSuperheroController); // validateBody(createSuperheroValidationSchema), createSuperheroController

router
  .route('/:superheroId')
  .get(validateObjectIdHandler, getSuperheroByIdController)
  .put(validateObjectIdHandler, updateSuperheroByIdController)
  .patch(validateObjectIdHandler, validateBody(updateSuperheroValidationSchema), updateSuperheroByIdController)
  .delete(validateObjectIdHandler, deleteSuperheroByIdController);

// router
//   .route('/superheroimages')
//   .post(
//     validateBody(createSuperheroImagesValidationSchema),
//     uploadImagesHandler.array('superhero_image', 7),
//     createImage
//   );
// router.route('/superheroimages/:imageId').delete(validateBody(deleteSuperheroImagesValidationSchema), deleteImage);

module.exports = { superheroesRouter: router };
