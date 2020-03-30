## Instalar Jest y TypeScript
---
`npm install --save-dev jest typescript ts-jest @types/jest`


## Comando de inicialización de ts-jest
---

`npx ts-jest config:init`

## Configuración de npm para ejecutar jest
---

```
"scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll"
}
```

- El primer script ***`(npm test)`*** ejecutará la suite de test de forma normal, es decir,
ejecutará los test y Jest se cerrará. 
- El segundo, ***`npm run test:watch`***, ejecutará los
test pero se mantendrá en modo ***"watcher"*** y cada vez que hagamos un cambio en el
código Jest volverá a ejecutar los test de forma automática.

## Directorios de trabajo
---

##### Ejemplo x: Framework Jest

```
src
    |--core
    |--tests
```

## Ejecutar los test
---
`npm test` | `npm run test:watch`


## Para reconocer las funciones de jest
 `npm i @types/jest`



## Aserciones (algunas)
---

- **toBe:** verifica que dosvalores sean iguales, para ello se basa en ***[Object.is()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)*** 
- **not.toBe:** en el caso de querer comprobar que son distintos
- **toBeNull:** valida que el valor sea null.
- **toBeGreaterThan:** valida que un valor numérico sea mayor a un número
especificado. 

    -- Además de este tenemos otros muchos comparadores para valores
    numéricos que pueden aportar semántica a nuestros test.
- **toMatch:** valida un string a través de una expresión regular.
- **toContain:** verifica que un array contenga un valor específico.
- **toThrow:** verifica que se haya lanzado una excepción.

[Lista completa de aserciones](https://jestjs.io/docs/en/expect)


## Organización y estructura
---

Los test se suelen agrupar en base a un
contexto común, como podría ser, por ejemplo, un determinado caso de uso. A dichas
agrupaciones se las conoce con el nombre de ***suites***.

**Jest**  nos permite definir estas suites tanto a nivel de fichero como a nivel de contexto.

### A nivel de fichero

El fichero debe tener este formato, esto es necesario para que Jest los detecte
- .spec. o .test.

Además, para mantener una buena legibilidad, lo ideal
sería que el ***sufijo** que lo precede sea el nombre del fichero que contiene el código
que estamos probando.


Ejemplo:
```
src
    |--core
        sum.js <- Fichero con el código a probar
    |--tests
        sum.test.js <- Fichero con el test
```


## Definición de contextos
---

Dentro de los propios ficheros podemos agrupar los test en contextos o
***`describes`***

```
describe('Use Case', () => {
    test('Should able to do something...', () => {});
});
```

Jest permite tener varios contextos, nos permite anidarlos.
Aunque como norma general, deberíamos evitar la anidación en más de dos niveles,
ya que dificulta la legibilidad de los test.


## Gestión del estado: before y after
---

```
describe('Use Case', () => {
    beforeEach(() => {
        //se ejecuta antes de cada test
    });

    afterEach(() => {
        //se ejecuta después de cada test
    });

    beforeAll(() => {
        //se ejecuta antes de todos los tests
    });

    afterAll(() => {
       //se ejecuta después de todos los tests
    });

    test('Should able to do something...', () => {
        //expect
    });
});
```


## Code coverage
---

Es una métrica que indica cuál es el porcentaje de nuestro
código que ha sido ejecutado por los test unitarios.

Sólo debemos añadir el
flag ***`–coverage`*** a la sección de scripts de nuestro package.json.

Quedaría así:

```
"scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll",
    "test:coverage": "jest --coverage"
}
```

Lo ejecutamos a través del comando ***`npm run test:coverage`***
