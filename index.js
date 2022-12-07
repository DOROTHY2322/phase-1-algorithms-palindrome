function isPalindrome(word) { 
  let polishedString = word.replace(/\w+|_/g,"");
  let reversedstring = polishedString.split("").reverse().join("")
  console.log(reversedstring, polishedString)
  if(polishedString != reversedstring){
    return false;
  }
  return true;
  
}
let result = isPalindrome("robot")
console.log(result)
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
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
