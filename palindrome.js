//I: a string -> O: true if palindrome, false if not

// 1: brute-force --> reverse and compare
const brutePalindromeCheck = (string) => {
  let reversal = string
    .split("")
    .reduce((reversedString, char) => char + reversedString);
  return string === reversal;
};

// 2: check opposite ends -> 1st-last, 2nd-2ndToLast,...
const okPalindromeCheck = (string) => {
  return [...string].every(
    (char, index) => char === string[string.length - 1 - index]
  );
};

// 3: more complete, only leaving alphanumeric -- setting to lowercase
const goodPalindromeCheck = (string) => {
  // regex for non alphanumeric chars
  let unwanted = /[^A-Za-z0–9]/g;
  // clean straight
  let cleanString = string.replace(unwanted, "").toLowerCase();
  // clean reversed
  let cleanReversed = [...cleanString].reverse().join("");
  // alrighty
  return cleanString === cleanReversed;
};

// 4: best
const palindromeCheck = (string) => {
  let unwanted = /[^A-Za-z0-9]/g;
  string = string.replace(unwanted, "").toLowerCase();
  // loopy: avoid unnecessary work
  let strLen = string.length;
  for (let i = 0; i < strLen / 2; i++) {
    if (string[i] !== string[strLen - 1 - i]) {
      return false;
    }
  }
  return true;
};
