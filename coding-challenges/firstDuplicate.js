/**
 * Task: Write a function that takes in an array of ints and returns the 
 * first occuring duplicate number
 */

function firstDuplicate(a) {
  let dupVal;
  let prevIndex;
  let dups = {};
  let indecies = [];
  for (let i = 0; i < a.length; i++) {
    let count = 0;
    
    for (let j = 0; j < a.length; j++) {
      if (a[i] == a[j]) {
        count++;
      }
    }
    
    if (count >= 2) {
      dups[a[i]] = i;
      indecies = Object.values(dups);
      Array.min = function(array) {
      	return Math.min.apply(Math, array);
      }
      lowestIndex = Array.min(indecies);
      dupVal = a[lowestIndex];
    } else {
    	dupVal = -1
    }
    
  }
  
  return console.log(dupVal);
}

firstDuplicate([1, 5, 3, 4, 5, 7, 7]); // 5