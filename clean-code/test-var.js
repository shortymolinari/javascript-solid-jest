var variable = 5;

{
    console.log('inside', variable); // 5
    var variable = 10;
}

console.log('outside', variable); // 10
variable = variable * 2;
console.log('changed', variable); // 20