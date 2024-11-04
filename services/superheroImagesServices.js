const cloudinary = require('cloudinary').v2;
const HttpError = require('../utils/HttpError');
const SuperheroImage = require('../models/superheroImageModel');

const createSuperheroImageService = async images => {
  const createResult = await SuperheroImage.insertMany(images);
  return createResult;
};

const deleteSuperheroImageService = async imageId => {
  const superheroImage = await SuperheroImage.findById(imageId);

  if (!superheroImage) {
    throw new HttpError(404, 'This superhero image does not exist');
  }

  await cloudinary.uploader.destroy(superheroImage.publicId);

  const deletedSuperheroImage = await SuperheroImage.findByIdAndDelete(imageId);

  return deletedSuperheroImage;
};

module.exports = { createSuperheroImageService, deleteSuperheroImageService };
