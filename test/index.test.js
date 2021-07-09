'use strict';

const { assert } = require('chai');

describe('index test', () => {
    let index;

    beforeEach(() => {
        /* eslint-disable global-require */
        index = require('../index');
        /* eslint-enable global-require */
    });

    it('throws exception with invalid options', () => {
        const objectToCombine = {
            a: [1, 2],
            b: 2
        };

        assert.throws(() => {
            index(objectToCombine);
        });
    });

    describe('returns correct', () => {
        it('simple example', () => {
            const objectToCombine = {
                a: [1, 2]
            };
            const correctCombination = [
                {
                    a: 1
                },
                {
                    a: 2
                }
            ];

            assert.deepEqual(index(objectToCombine), correctCombination);
        });

        it('complex example', () => {
            const objectToCombine = {
                a: [1, 2, 3],
                b: ['a'],
                c: ['c', 'd']
            };
            const correctCombination = [
                {
                    a: 1,
                    b: 'a',
                    c: 'c'
                },
                {
                    a: 1,
                    b: 'a',
                    c: 'd'
                },
                {
                    a: 2,
                    b: 'a',
                    c: 'c'
                },
                {
                    a: 2,
                    b: 'a',
                    c: 'd'
                },
                {
                    a: 3,
                    b: 'a',
                    c: 'c'
                },
                {
                    a: 3,
                    b: 'a',
                    c: 'd'
                }
            ];

            assert.deepEqual(index(objectToCombine), correctCombination);
        });
    });
});
