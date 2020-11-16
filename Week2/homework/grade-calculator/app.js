const testResultInput = document.querySelector("#test-result > input");
const gradeInput = document.querySelector("#grade-output > input");
gradeInput.style.visibility = "hidden";

testResultInput.addEventListener("click", function () {

  const testResult = testResultInput.value;

  gradeInput.style.visibility = "visible";

  if (testResult > 89 && testResult < 101) {
    gradeInput.value = "You got a A (" + testResult + "%)!"
  }
  else if (testResult > 79 && testResult < 90) {
    gradeInput.value = "You got a B (" + testResult + "%)!"
  }
  else if (testResult > 69 && testResult < 80) {
    gradeInput.value = "You got a C (" + testResult + "%)!"
  }
  else if (testResult > 59 && testResult < 70) {
    gradeInput.value = "You got a D (" + testResult + "%)!"
  }
  else if (testResult > 49 && testResult < 60) {
    gradeInput.value = "You got a E (" + testResult + "%)!"
  }
  else if (testResult > 0 && testResult < 50) {
    gradeInput.value = "You got a f (" + testResult + "%)!"
  }
  else { gradeInput.style.visibility = "hidden"; };

})
