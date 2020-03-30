//bad
function withoutReferentialTransparency(){
    let counter = 1;
  
    function increaseCounter(value) {
      counter = value + 1;
    }
  
    increaseCounter(counter);
    console.log(counter); // 2
}
  
//better
function withReferentialTransparency(){
    let counter = 1;
  
    function increaseCounter(value) {
      return value + 1;
    }
  
    console.log(increaseCounter(counter)); // 2
    console.log(counter); // 1
  
}
  
withoutReferentialTransparency();
withReferentialTransparency();