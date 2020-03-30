import { fizzBuzzKata } from "../core/fizzbuzzKata";

describe('FizzBuzz', () => {

    it('should return one if receive one', () => {
        const expected = 1;
        const result = fizzBuzzKata(1);

        expect(result).toBe(expected);
    });


    it('should return fizz if receive three', () => {
        const expected = "fizz";
        const result = fizzBuzzKata(3);

        expect(result).toBe(expected);
    });


    it('should return buzz if receive five', () => {
        const expected = "buzz";
        const result = fizzBuzzKata(5);

        expect(result).toBe(expected);
    });



    it('should return fizzbuzz if receive fifteen', () => {
        const expected = "fizzbuzz";
        const result = fizzBuzzKata(15);

        expect(result).toBe(expected);
    });


    it('should return fizz if receive any number divisible by three', () => {
        const expected = "fizz";
        const result = fizzBuzzKata(9);

        expect(result).toBe(expected);
    });


    it('should return buzz if receive any number divisible by five', () => {
        const expected = "buzz";
        const result = fizzBuzzKata(25);

        expect(result).toBe(expected);
    });
    

    it('should return buzz if receive any number divisible by fifteen', () => {
        const expected = "fizzbuzz";
        const result = fizzBuzzKata(30);

        expect(result).toBe(expected);
    });


    it('should return the same number that receives', () => {
        const expected = 4;
        const result = fizzBuzzKata(4);

        expect(result).toBe(expected);
    });

});