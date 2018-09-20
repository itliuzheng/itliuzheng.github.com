'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API:'"http://119.147.171.111"'
  // BASE_API:'"http://192.168.11.116:8105"'
})
