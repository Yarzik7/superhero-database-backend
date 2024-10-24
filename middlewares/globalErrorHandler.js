const globalErrorHandler = (err, req, res, next) => {
  console.log('Global error: ', err.statusCode);
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || 'Something, went wrong, please try again later...' });
};

module.exports = globalErrorHandler;
