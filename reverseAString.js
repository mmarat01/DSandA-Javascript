// I: a string of character -> O: reversed string
const trivialReverse = (string) => string.split("").reverse().join("");

// II: real method
const reverseString = (string) => {
  let reversedString = "";
  for (let char of string) {
    reversedString = char + reversedString;
  }
  return reversedString;
};

// III: nifty JS method
const niftyReverse = (string) => {};
