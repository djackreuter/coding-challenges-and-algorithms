/**
 * Task: capitalize the first letter of each word in a string
 */

function firstLetter(string) {
	let strArr = string.split(" ");
  for (let i = 0; i < strArr.length; i++) {
  	strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
  }
  string = strArr.join(" ");
  
  return string;
}

console.log(firstLetter('capitalize each letter'));