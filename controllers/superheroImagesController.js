const controllerWrapper = require('../utils/controllerWrapper');

const createImage = controllerWrapper(async (req, res) => {
  console.log('createImage', req.file);
  res.json({ result: 'Ok' });
});

module.exports = { createImage };
