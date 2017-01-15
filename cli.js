#!/usr/bin/env node
'use strict';
var meow = require('meow');
var catNames = require('./');

var cli = meow([
	'Examples',
	'  $ cat-names',
	'  Pumpkin',
	'',
	'  $ cat-names --all',
	'  Alexa',
	'  Alexis',
	'  ...',
	'',
	'Options',
	'  --all   Get all names instead of a random name'
]);

console.log(cli.flags.all ? catNames.all.join('\n') : catNames.random());
