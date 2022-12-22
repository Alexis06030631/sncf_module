'use strict';

/**
 * @typedef {Object} SNCFjsErrorCodes

 * @property {'UnknownError'} UnknownError
 * @property {'TokenInvalid'} TokenInvalid
 * @property {'TokenMissing'} TokenMissing
 * @property {'TokenNotInitialized'} TokenNotInitialized
 * @property {'NotReady'} NotReady
 * @property {'UrlNotFound'} UrlNotFound
 * @property {'NotImplemented'} NotImplemented
 * @property {'InvalidFunction'} InvalidFunction
 * @property {'IdIsMissing'} IdIsMissing
 *
 * @property {'unable_to_parse'} unable_to_parse
 * @property {'UnknownObject'} UnknownObject
 * @property {'date_out_of_bounds'} date_out_of_bounds
 */

const keys = [
	'UnknownError',
	'TokenInvalid',
	'TokenMissing',
	'TokenNotInitialized',
	'NotReady',
	'IdIsMissing',
	'UrlNotFound',
	'NotImplemented',
	'InvalidFunction',

	// Navitia errors codes
	'unable_to_parse',
	'UnknownObject',
	'date_out_of_bounds'
];

// JSDoc for IntelliSense purposes
/**
 * @type {SNCFjsErrorCodes}
 * @ignore
 */
module.exports = Object.fromEntries(keys.map(key => [key, key]));