const { Router } = require('express');
const validateBody = require('../utils/validateBody.js');
const validateObjectIdHandler = require('../middlewares/validateObjectIdHandler.js');

const {
  createSuperheroImagesValidationSchema,
  deleteSuperheroImagesValidationSchema,
} = require('../utils/validation/superheroImagesValodationSchemas');

const { createImage, deleteImage } = require('../controllers/superheroImagesController.js');
const uploadImagesHandler = require('../middlewares/uploadImagesHandler');

const router = Router();

router.route('/').post(
  // validateBody(createSuperheroImagesValidationSchema),
  uploadImagesHandler.array('superhero_image', 7),
  createImage
);
router.route('/:imageId').delete(validateBody(deleteSuperheroImagesValidationSchema), deleteImage);

module.exports = { superheroImagesRouter: router };
