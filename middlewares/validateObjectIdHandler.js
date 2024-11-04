const mongoose = require('mongoose');
const HttpError = require('../utils/HttpError');

const validateObjectIdHandler = field => {
  return (req, res, next) => {
    const objectId = req.params[field];
    if (!mongoose.Types.ObjectId.isValid(objectId)) {
      return next(new HttpError(400, 'Invalid ObjectId'));
    }
    next();
  };
};

module.exports = validateObjectIdHandler;
