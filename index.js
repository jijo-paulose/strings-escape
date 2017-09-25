
'use strict';

var charactersList = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (string) {
	if (typeof string !== 'string') {
		throw new TypeError('Error! Got unxpected string');
	}
	return string.replace(charactersList, '\\$&');
};