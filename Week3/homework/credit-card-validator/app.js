const cardNumber = document.querySelector("#enter-number > input");
const errorOrNot = document.querySelector("#checked-number > input");
const enteredNum = []

cardNumber.addEventListener("input", function () {
  for (i = 0; i < 16; i++)
    let enteredNum = enteredNum.push(cardNumber.value);
  if (enteredNum.length = 16) {
    console.log(enteredNum)
  }
  else { errorOrNot.value = "error: incorrect number"; }
});

