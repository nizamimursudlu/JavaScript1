let cardNumber = document.querySelector("#enter-number > input");
const errorWarning = document.querySelector("#checked-number > input");
let enteredNum = []
var countOfSameNumber = 0

//I APOLOGIZE IN ADVANCE FOR MY POOR DUTCH :) 

//creating array made of entered numbers 
cardNumber.addEventListener("input", function () {
  enteredNum.push(cardNumber.value)
  var enteredNumToArray = enteredNum[15].split('');

  //input must be 16 caracters
  amountOfNumbers = cardNumber.value;
  if (amountOfNumbers.length > 16) {
    errorWarning.value = "FOUT: het nummer heeft te veel tekens!"
  }

  //converting stings in array to numbers
  let convertedStringToNumber = enteredNumToArray.map(i => Number(i));

  //all characters must be numbers
  for (x = 0; x < 16; x++) {
    if (typeof convertedStringToNumber[x] !== "number") {
      errorWarning.value = "FOUT: alle tekens moeten cijfers zijn!"
    }
  }

  //at least two diferent numbers should be represended
  let firstElementOfArray = convertedStringToNumber[0];
  for (let y = 0; y < 16; y++) {
    if (firstElementOfArray === convertedStringToNumber[y]) {
      countOfSameNumber = countOfSameNumber + 1;
    }
  }
  if (countOfSameNumber === 16) {
    errorWarning.value = "FOUT: alle tekens mogen niet hetselfde zijn!"
  }


  //the sum of all the numbers must be greater than 16
  var sumOfArrayValues = convertedStringToNumber.reduce(add);
  function add(a, b) {
    return a + b;
  }
  if (sumOfArrayValues < 16) {
    errorWarning.value = "FOUT: het som van getallen is minder dan 16!"
  }

  //the last number must be even
  if (convertedStringToNumber[15] & 1) {
    errorWarning.value = "FOUT: het laatste nummer moet even zijn!"
  }
})