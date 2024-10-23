const controllerWrapper = require('../utils/controllerWrapper');

const testControllers = controllerWrapper(async (req, res) => {
  console.log(req.body);
  res.status(200).json({ response: 'Hi and to you!)', yourReq: req.body });
});

module.exports = { testControllers };
