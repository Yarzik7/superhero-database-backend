const { createSuperheroImageService } = require('../services/superheroImagesServices');
const controllerWrapper = require('../utils/controllerWrapper');

const createImage = controllerWrapper(async (req, res) => {
  // console.log('createImageBody', req.body.id);
  // console.log('createImage', req.files);
  const superheroImages = req.files.map(file => ({
    url: file.path,
    publicId: file.filename,
    superheroId: req.body.superheroId,
  }));
  // console.log('SHimg: ', superheroImages);
  const result = await createSuperheroImageService(superheroImages);
  console.log('result: ', result);
  res.status(201).json(result);
});

const deleteImage = controllerWrapper(async (req, res) => {
  console.log('createImage', req.files);
  res.json({ result: 'Ok' });
});

module.exports = { createImage, deleteImage };
