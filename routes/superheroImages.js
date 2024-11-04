const { Router } = require('express');
const validateObjectIdHandler = require('../middlewares/validateObjectIdHandler.js');

const { createImageController, deleteImageController } = require('../controllers/superheroImagesControllers.js');
const uploadImagesHandler = require('../middlewares/uploadImagesHandler');

const router = Router();

router.route('/').post(uploadImagesHandler.array('superhero_image', 7), createImageController);
router.route('/:imageId').delete(validateObjectIdHandler('imageId'), deleteImageController);

module.exports = { superheroImagesRouter: router };
