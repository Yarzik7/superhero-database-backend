const { createSuperheroImageService, deleteSuperheroImageService } = require('../services/superheroImagesServices');
const controllerWrapper = require('../utils/controllerWrapper');

const createImageController = controllerWrapper(async (req, res) => {
  const superheroImages = req.files.map(file => ({
    url: file.path,
    publicId: file.filename,
    superheroId: req.body.superheroId,
  }));

  res.status(201).json(await createSuperheroImageService(superheroImages));
});

const deleteImageController = controllerWrapper(async (req, res) => {
  const { imageId } = req.params;
  res.json(await deleteSuperheroImageService(imageId));
});

module.exports = { createImageController, deleteImageController };
