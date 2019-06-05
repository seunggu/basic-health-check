const health = require('./health');

const setRouters = app => {
  app.use('/health', health);
}

module.exports = setRouters;
