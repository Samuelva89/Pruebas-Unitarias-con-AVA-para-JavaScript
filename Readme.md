# Proyecto de Pruebas con AVA

Este proyecto demuestra cómo implementar pruebas unitarias en JavaScript utilizando AVA.

## Requisitos Previos

- Node.js (versión 12 o superior)
- npm (administrador de paquetes de Node.js)

## Instalación

1. Clona este repositorio
2. Instala las dependencias:

```bash
npm install
```

## Estructura del Proyecto

```
proyecto/
├── src/
│   └── suma.js         # Código fuente
├── test/
│   └── suma.test.js    # Archivos de prueba
├── package.json        # Configuración del proyecto
└── README.md          # Documentación
```

## Escribiendo Pruebas

### Ejemplo Básico

```javascript
// En src/suma.js
function suma(a, b) {
    return a + b;
}

module.exports = { suma };

// En test/suma.test.js
const test = require('ava');
const { suma } = require('../src/suma.js');

test('suma 1 + 2 debe ser igual a 3', t => {
    t.is(suma(1, 2), 3);
});
```

## Comandos de Prueba

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar en modo observador
npx ava --watch

# Ejecutar pruebas específicas
npx ava test/suma.test.js

# Ejecutar con más detalles
npx ava --verbose
```

## Assertions Disponibles

AVA proporciona varios métodos de aserción útiles:

```javascript
test('ejemplo de assertions', t => {
    t.true(value);           // Verifica si es verdadero
    t.false(value);          // Verifica si es falso
    t.is(actual, expected);  // Compara valores
    t.deepEqual(actual, expected); // Compara objetos/arrays
    t.throws(fn);            // Verifica si lanza error
});
```

## Configuración

El archivo `package.json` incluye la configuración básica de AVA:

```json
{
  "scripts": {
    "test": "ava"
  },
  "ava": {
    "files": [
      "test/**/*"
    ],
    "verbose": true
  }
}
```

## Consejos Adicionales

- Utiliza nombres descriptivos para tus pruebas
- Mantén las pruebas simples y enfocadas
- Sigue la convención de nombres `*.test.js`
- Usa la extensión AVA en Visual Studio Code para mejor integración

## Recursos

- [Documentación oficial de AVA](https://github.com/avajs/ava)
- [Guía de assertions](https://github.com/avajs/ava/blob/main/docs/03-assertions.md)