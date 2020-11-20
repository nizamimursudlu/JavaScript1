let cardNumber = document.querySelector("#enter-number > input");
const errorWarning = document.querySelector("#checked-number > input");
let enteredNum = []
var array = []

//creating array made of entered numbers 
cardNumber.addEventListener("input", function () {
  enteredNum.push(cardNumber.value)
  var enteredNumToArray = enteredNum[15].split('');
  console.log(enteredNumToArray);

  //converting stings in array to numbers
  let convertedStringToNumber = enteredNumToArray.map(i => Number(i));
  console.log(convertedStringToNumber)

  //input must be 16 caracters
  if (enteredNumToArray.length > 16) {
    errorWarning.value = "Error: the number you enter has too many characters"
  }

  //the sum of all the numbers must be greater than 16
  var sumOfArrayValues = convertedStringToNumber.reduce(add);
  function add(a, b) {
    return a + b;
  }
  console.log(sumOfArrayValues);
  if (sumOfArrayValues < 16) {
    errorWarning.value = "ERROR: the number is incorrect"
  }
  console.log(convertedStringToNumber[15])

  //the last number must be even
  if (convertedStringToNumber[15] & 1) {
    errorWarning.value = "ERROR: the last number of your card much be even"
  }



})