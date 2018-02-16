'use strict';

const clone = require('clone');
const joi = require('joi');

/**
  * Helper function to recursively go through generating all the permutations
  * @method generateMatrix
  * @param  {Object}  options               Object of Key => Array to find combination of
  * @param  {Object}  currentCombination    Object of Key => Value of current combination
  * @param  {Array}   keysToIterate         Array of keys to be adding to the combination.
                                              Should be the Array of keys of object options
  * @param  {Number}  keyIndexer            Current index of key to be adding into the currentCombination
  * @param  {Array}   permutations          The permutations array to be pushing to
  * @return {Array}                         List of permutations of the environment
 */
function generateMatrixHelper(options, currentCombination,
    keysToIterate, keyIndexer, permutations) {
    if (keysToIterate.every(optionKey => currentCombination[optionKey])) {
        permutations.push(currentCombination);

        return;
    }

    const keyToAdd = keysToIterate[keyIndexer];
    const nextKeyIndexer = keyIndexer + 1;

    options[keyToAdd].forEach((value) => {
        const nextCombination = clone(currentCombination);

        nextCombination[keyToAdd] = value;

        return generateMatrixHelper(options, nextCombination,
            keysToIterate, nextKeyIndexer, permutations);
    });
}

/**
  * Generate all permutations of a given environment matrix
  * @method generateMatrix
  * @param  {Object}       options         Object of Key => Array
  * @return {Array}                        List of permutations of the environment
 */
function generateMatrix(options) {
    const perms = [];
    const keysToIterate = Object.keys(options);

    keysToIterate.forEach((key) => {
        joi.assert(options[key], joi.array(), `${key} needs to be an array`);
    });

    generateMatrixHelper(options, {}, keysToIterate, 0, perms);

    return perms;
}

module.exports = generateMatrix;
