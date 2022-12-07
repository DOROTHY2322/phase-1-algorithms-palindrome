function isPalindrome(word) { 
  let String = word.replace();
  let string = String.split("").reverse().join("")
  console.log(string, String)
  if(String !== string){
    return false;
  }
  return true;
  
}
let result = isPalindrome("robot")
console.log(result)
/* 
  Add your pseudocode here
  should return boolean true or false if the word is palindrome
create avariable called String
return the string
use conditional if to satisfy the conditions set
use comparisons that is the strict inequality and loose inequality

*/

/*
  Add written explanation of your solution here
  a palindrome is a word or sentence thats spelled the same both forward and backword ignoring punctuation and case.
The strict inequality operator returns true if two values are not equal without performing type conversions
while the loose inequality returns true if the values are not equal.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
