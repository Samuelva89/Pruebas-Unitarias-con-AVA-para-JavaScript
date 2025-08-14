const test = require('ava');
const { suma } = require('../src/suma.js');

test('suma de 1 y 2 debe ser 3', t => {
    t.is(suma(1, 2), 3);
});

test('suma de -1 y 1 debe ser 0', t => {
    t.is(suma(-1, 1), 0);
});

test('suma de 0 y 0 debe ser 0', t => {
    t.is(suma(0, 0), 0);
});