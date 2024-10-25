const globalErrorHandler = require('./middlewares/globalErrorHandler');
const notFoundHandler = require('./middlewares/notFoundHandler');
const express = require('express');
const router = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use(notFoundHandler);
app.use(globalErrorHandler);

module.exports = app;
