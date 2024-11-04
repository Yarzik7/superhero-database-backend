const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const HttpError = require('../utils/HttpError');
const Superhero = require('../models/superheroModel');
const SuperheroImage = require('../models/superheroImageModel');

const getAllSuperheroesService = async req => {
  const { page, limit = 5 } = req.query;
  const skip = (page - 1) * limit;

  return await Superhero.aggregate([
    { $sort: { _id: -1 } },
    { $skip: skip },
    { $limit: parseInt(limit) },
    {
      $lookup: {
        from: 'superheroimages',
        localField: '_id',
        foreignField: 'superheroId',
        as: 'images',
      },
    },
  ]);
};

const getSuperheroByIdService = async superheroId => {
  const superhero = await Superhero.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(superheroId) } },
    {
      $lookup: {
        from: 'superheroimages',
        localField: '_id',
        foreignField: 'superheroId',
        as: 'images',
      },
    },
  ]);

  if (!superhero.length) {
    throw new HttpError(404, 'This superhero does not exist');
  }

  return superhero[0];
};

const createSuperheroesService = async body => {
  const createResult = await Superhero.create(body);
  const createdSuperhero = createResult.toObject();
  delete createdSuperhero.__v;
  return createdSuperhero;
};

const updateSuperheroByIdService = async (superheroId, body) => {
  const updatedSuperhero = await Superhero.findByIdAndUpdate(superheroId, body, { new: true });

  if (!updatedSuperhero) {
    throw new HttpError(404, 'This superhero does not exist');
  }

  return updatedSuperhero;
};

const deleteSuperheroByIdService = async superheroId => {
  const deletedSuperhero = await Superhero.findByIdAndDelete(superheroId);

  if (!deletedSuperhero) {
    throw new HttpError(404, 'This superhero does not exist');
  }

  const images = await SuperheroImage.find({ superheroId });

  for (const image of images) {
    await cloudinary.uploader.destroy(image.publicId);
  }

  await SuperheroImage.deleteMany({ superheroId });

  return deletedSuperhero;
};

module.exports = {
  getAllSuperheroesService,
  getSuperheroByIdService,
  createSuperheroesService,
  updateSuperheroByIdService,
  deleteSuperheroByIdService,
};
