'use strict';
var uniqueRandomArray = require('unique-random-array');
var meowNames = require('./meow-names.json');

exports.all = meowNames;
exports.random = uniqueRandomArray(meowNames);
