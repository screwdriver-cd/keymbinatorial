# Keymbinatorial

[![Greenkeeper badge](https://badges.greenkeeper.io/screwdriver-cd/keymbinatorial.svg)](https://greenkeeper.io/)
[![Version][npm-image]][npm-url] ![Downloads][downloads-image] [![Build Status][status-image]][status-url] [![Open Issues][issues-image]][issues-url] [![Dependency Status][daviddm-image]][daviddm-url] ![License][license-image]

> Generates the unique combinations of key values by taking a single value from each keys array

## Usage

```bash
npm install keymbinatorial
```

```js
var keymbinatorial = require('keymbinatorial');

let objectToCombine = {
    a: ['a', 'b', 'c'],
    c: [1, 2],
    e: [{ a: '1'}, {b: '2'}]
};

// combinations will be an array of unique combinations based on each key and the values in the array
let combinations = keymbinatorial(objectToCombine);

console.log(combinations);
/*
will output:
[
  { a: 'a', c: 1, e: { a: '1' } },
  { a: 'a', c: 1, e: { b: '2' } },
  { a: 'a', c: 2, e: { a: '1' } },
  { a: 'a', c: 2, e: { b: '2' } },
  { a: 'b', c: 1, e: { a: '1' } },
  { a: 'b', c: 1, e: { b: '2' } },
  { a: 'b', c: 2, e: { a: '1' } },
  { a: 'b', c: 2, e: { b: '2' } },
  { a: 'c', c: 1, e: { a: '1' } },
  { a: 'c', c: 1, e: { b: '2' } },
  { a: 'c', c: 2, e: { a: '1' } },
  { a: 'c', c: 2, e: { b: '2' } }
]
*/
```

The `keymbinatorial` function takes in an Nx1 object, where N is a set of keys that map to
an array.

For each key in the object, the function builds up a list of objects containing a unique combination
of keys to values in the array.

## Testing

```bash
npm test
```

## License

Code licensed under the BSD 3-Clause license. See LICENSE file for terms.

[npm-image]: https://img.shields.io/npm/v/keymbinatorial.svg
[npm-url]: https://npmjs.org/package/keymbinatorial
[downloads-image]: https://img.shields.io/npm/dt/keymbinatorial.svg
[license-image]: https://img.shields.io/npm/l/keymbinatorial.svg
[issues-image]: https://img.shields.io/github/issues/screwdriver-cd/screwdriver.svg
[issues-url]: https://github.com/screwdriver-cd/screwdriver/issues
[status-image]: https://cd.screwdriver.cd/pipelines/20/badge
[status-url]: https://cd.screwdriver.cd/pipelines/20
[daviddm-image]: https://david-dm.org/screwdriver-cd/keymbinatorial.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/screwdriver-cd/keymbinatorial
