/**
 * Task: Write a function to find the highest 
 * product of two adjacent ints in an array
 */


function adjacentElementsProduct(inputArray) {
  let highest = null;
  let next_item;
  inputArray.forEach((item, index) => {
    next_item = inputArray[index + 1];
    if (next_item == undefined) {
    	return;
    }
    if (highest < (item * next_item)) {
      highest = (item * next_item);
    } else if (highest == null){
    	highest = (item * next_item);
    }
  });
  return console.log(highest);
}

let inputArray = [1, 0, 10, 2, 4, 16];
adjacentElementsProduct(inputArray); // 64