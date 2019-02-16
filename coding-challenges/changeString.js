/**
 * Task: Write a function that takes a string and moves
 * all the duplicate letters to the beginning of the
 * string
 */

const changeString = str => {
  let strArr = Array.from(str);
  // create an object to store letter occurances
  let obj = {};
  // create array to store duplicate letters
  let dupArr = [];
  strArr.forEach(item => {
    // check if item present in obj and increment count if so
    if (obj[item]) {
      obj[item] += 1;
    } else {
      // else, item not in obj & set initial occurance to 1
      obj[item] = 1;
    }
  });

  // find object keys that have a value > 2
  Object.keys(obj).forEach(key => {
    if (obj[key] >= 2) {
      // push keys(letters) into new array 
      // loop through as many times as letter occurs to add key(letter) each time
      for (let i = obj[key]; i > 0; i--) {
        dupArr.push(key);
      }
      // filter original strArray to remove the duplicate letters
      strArr = strArr.filter(letter => letter !== key)
    }
  });
  // original Array should be removed of duplicate letters
  // new Array should have all duplicate letters
  // combine arrays
  let result = [...dupArr, ...strArr];
  // transform back to string
  result = result.join('');
  return console.log(result);
}

changeString('albuquerque'); // uuuqqeealbr