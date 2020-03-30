const fibonacci = (n) => {
    
    const partialFibonacci = (n) => {
        return n == 1  ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
    }
        
    return n == 0  ? 0 : partialFibonacci(n);
}

module.exports = fibonacci; 