const HttpError = require('../utils/HttpError');
const SuperheroImage = require('../models/superheroImageModel');

const createSuperheroImageService = async images => {
  console.log('imagesServ: ', images);
  const createResult = await SuperheroImage.insertMany(images);
  console.log('createResult: ', createResult);
  return createResult;
};

module.exports = { createSuperheroImageService };
