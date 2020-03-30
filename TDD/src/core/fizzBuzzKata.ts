import { match } from "x-match-expression";

export const fizzBuzzKata = (n) => {
    const divisibleBy = divider => n => n % divider === 0;

    return match(n)
        .case(divisibleBy(15), "fizzbuzz")
        .case(divisibleBy(5), "buzz")
        .case(divisibleBy(3), "fizz")
        .default(n);
}