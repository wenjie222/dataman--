'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = {
  NODE_ENV: '"production"',
  // API_BASEURL: '"/../.."'
  API_BASEURL: '"http://192.168.10.126:18082/"'
}
