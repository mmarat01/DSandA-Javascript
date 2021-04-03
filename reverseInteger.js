// I: integer -> O: reversed integer

// 1: trivial
const trivialReverseInteger = (integer) => {
  return (
    parseInt(integer.toString().split("").reverse().join("")) *
    Math.sign(integer)
  );
};

// 2:
/*
  1234 -> 
    1234 % 10 = 4
      Math.floor(1234/10) = 123
    123 % 10 = 3
      4 * 10 = 40 + 3 = 43
      Math.floor(123/10) = 12
    12 % 10 = 2
      43 * 10 = 430 + 2 = 432
      Math.floor(12/10) = 1 
    1 % 10 = 1
      432 * 10 = 4320 + 1 = 4321
      

    ***** on a 32-bit integer environment
 */
// 2: best
const couldOverflowMax = (integer, toAdd) => {
  // 32bit top
  const MAX_INT = Math.pow(2, 31) - 1;
  // preemptive bound
  const HI_BOUND = parseInt(MAX_INT / 10);
  return integer > HI_BOUND || (integer === HI_BOUND && toAdd > 7);
};

const couldOverflowMin = (integer, toSub) => {
  // 32bit low
  const MIN_INT = Math.pow(-2, 31);
  // preemptive bound
  const LOW_BOUND = parseInt(MIN_INT / 10);
  return integer < LOW_BOUND || (integer === LOW_BOUND && toSub < -8);
};

// is this a higher order function
//   bc if it is
//       hehe
const couldOverflow = (integer, toAdd, toSub) => {
  return couldOverflowMax(integer, toAdd) || couldOverflowMin(integer, toSub);
};

const reverseInteger = (integer) => {
  // logistics
  let popped = 0;
  let reversedInt = 0;

  while (integer) {
    // pop it
    popped = integer % 10;
    // update running num
    integer = parseInt(integer / 10);
    if (couldOverflow(integer, 7, -8)) return 0;
    // update reversed
    reversedInt = reversedInt * 10 + popped;
  }
  //that's it
  return reversedInt;
};
