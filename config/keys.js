if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
  console.log('===================> run mode: production');
} else {
  module.exports = require('./keys_dev');
  console.log('===================> run mode: development');
}
