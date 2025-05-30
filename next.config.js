const util = require('util');
// Override deprecated util._extend to use Object.assign
util._extend = Object.assign;

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['@'] = require('path').resolve(__dirname);
    return config;
  }
};