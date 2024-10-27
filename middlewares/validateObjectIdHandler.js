const mongoose = require('mongoose');
const HttpError = require('../utils/HttpError');

const validateObjectIdHandler = (req, res, next) => {
  const { superheroId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(superheroId)) {
    return next(new HttpError(400, 'Invalid superhero ID'));
  }
  next();
};

module.exports = validateObjectIdHandler;
