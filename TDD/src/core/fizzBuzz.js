const fizzBuzz = (n) => {


    /**
     * 1- Falla
     */
    //return 0;
    
    /**
     * 2- Implematación falsa
     * 1 test que pasa
     */
    //return 1

    /**
     * 3 solucion mínima
     */
    /*if (n == 3)
        return "fizz";

    if (n == 5)
        return "buzz";

    return 1;*/

    /**
     * Solución final
     */
    /*if (n % 15 == 0)
        return "fizzbuzz";

    if (n % 3 == 0)
        return "fizz";

    if (n % 5 == 0)
        return "buzz";

    return n;*/


    /**
     * =>Mejorando y refactorizando la solución final
     * 
     * Podríamos añadirle algo de semántica, extrayendo una función *lambda
     * que compruebe si n es divisible por un número dado
     */
    const divisibleBy = (divider, n) => n % divider == 0;

    if (divisibleBy(15, n))
        return "fizzbuzz";

    if (divisibleBy(3, n))
        return "fizz";

    if (divisibleBy(5, n))
        return "buzz";

    return n;
}

module.exports = fizzBuzz;