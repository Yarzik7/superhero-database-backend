const HttpError = require('../utils/HttpError');
const Superhero = require('../models/superheroModel');

const getAllSuperheroesService = async req => {
  const { page, limit } = req.query;
  const skip = (page - 1) * limit;
  const res = await Superhero.find().skip(skip).limit(limit);
  return res;
};

const getSuperheroByIdService = async superheroId => {
  const superhero = await Superhero.findById(superheroId);

  if (!superhero) {
    throw new HttpError(404, 'This superhero does not exist');
  }

  return superhero;
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

  return deletedSuperhero;
};

module.exports = {
  getAllSuperheroesService,
  getSuperheroByIdService,
  createSuperheroesService,
  updateSuperheroByIdService,
  deleteSuperheroByIdService,
};
