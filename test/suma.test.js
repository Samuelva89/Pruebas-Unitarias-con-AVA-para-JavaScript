const test = require('ava');
const { suma } = require('../src/suma.js');

// Añade más casos de prueba
test('suma de números positivos', t => {
    t.is(suma(1, 2), 3);
});

test('suma de números negativos', t => {
    t.is(suma(-1, -2), -3);
});

