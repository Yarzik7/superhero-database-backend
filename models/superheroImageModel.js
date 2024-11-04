const { Schema, model } = require('mongoose');
const mongooseErrorHandler = require('../middlewares/mongooseErrorHandler');

const superheroImageSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
    superheroId: {
      type: String, //Schema.Types.ObjectId,
      ref: 'Superhero',
      required: true,
    },
  },
  { versionKey: false }
);

superheroImageSchema.post('save', mongooseErrorHandler);

const SuperheroImage = model('superheroImages', superheroImageSchema);

module.exports = SuperheroImage;
