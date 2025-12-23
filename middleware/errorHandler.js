const ErrorLog = require('../models/ErrorLog');

module.exports = async (err, req, res, next) => {

  const existingError = await ErrorLog.findOne({
    message: err.message,
    route: req.originalUrl
  });

  if (existingError) {
    existingError.count += 1;
    existingError.lastOccurredAt = Date.now();
    await existingError.save();
  } else {
    await ErrorLog.create({
      message: err.message,
      route: req.originalUrl,
      severity: err.severity || 'low'
    });
  }

  res.status(500).json({
    message:
      process.env.NODE_ENV === 'production'
        ? 'Something went wrong'
        : err.message
  });
};
