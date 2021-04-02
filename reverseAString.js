// I: a string of characters -> O: reversed string

// 1: trivial method
/*
  split string into array of characters
  reverse the array of characters
  join the array back into a string
 */
const trivialReverse = (string) => string.split("").reverse().join("");

// 2: real method
/*
  loop thru each string char
  have running 'total'
  append char to running total like this: char + running
  e.g.
  "hello" -> ""
        1. "h" + "" = "h"
        2. "e" + "h" = "eh"
        .
        .
        5. "o" + "lleh" = "olleh"
 */
const reverseString = (string) => {
  let reversedString = "";
  for (let char of string) {
    reversedString = char + reversedString;
  }
  return reversedString;
};

// 3: nifty JS method
/*
  same as above but in reduce function
  reduce takes 2 args (accumulator, current element)
    |
    .--> correspond to reversing string and current car
 */
const niftyReverse = (string) => {
  string.split("").reduce((reversedString, char) => char + reversedString);
};
