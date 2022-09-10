const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  if (arrayOfString === null || arrayOfString === undefined) {
    return undefined;
  } else {
    let array1 = []; 
    let longestString = arrayOfString[0];
    for(let i = 0; i < arrayOfString.length; i++) {
      if (arrayOfString[i].length > longestString.length) {
        longestString = arrayOfString[i];
      }
    }
    for(i=0; i<arrayOfString.length; i++) {
      if (arrayOfString[i].length == longestString.length) {
        array1.push(arrayOfString[i])
      }
    } 
    return array1;
  }
}
module.exports = getMaxLengthString
