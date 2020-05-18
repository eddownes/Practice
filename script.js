console.log("hello world");

let totalNumbers = 0;

addNumbers(65, 4);

function addNumbers(num1, num2) {
  totalNumbers = num1 + num2;
  console.log(totalNumbers);
}

function minutesToSeconds(min) {
  return min * 60;
}

console.log(minutesToSeconds(10));
