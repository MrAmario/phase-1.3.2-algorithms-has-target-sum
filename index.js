  function hasTargetSum(array, target) {
    // Write your algorithm here  
    for(let i = 0; i < array.length; i++) {
      const lookLike = target - array[i];
      for(let j = i + 1; j < array.length; j++){
        //compair whether the 'look' matches any of the remaining index values.
        console.log(array.length)
        console.log(target)
        console.log(array[i])
        console.log(lookLike)
        if (array[j] === lookLike)return true;
      }
    
        return false
    }
  }
  hasTargetSum([22, 19, 4, 6, 30], 25)
    //find a way to add each of the arrays together in order to give the value of the target.
    //Or look for the value that remains after the subtraction of the target and a certain index



  /* 
    Write the Big O time complexity of your function here
  */

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
