// you know it
const fizzBuzz = (num) => {
  for (let i = 0; i < num; i++) {
    if (i % 6 == 0) {
      console.log("Fizzbuzz");
    } else if (i % 2 == 0) {
      console.log("Fizz");
    } else if (i % 3 == 0) {
      console.log("Buzz");
    }
  }
};
