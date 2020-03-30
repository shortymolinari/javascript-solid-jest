let variable = 5;

{
   // console.log('inside', variable); // error
    let variable = 10;
}

console.log('outside', variable); // 5

variable = variable * 2;

console.log('changed', variable); // 10