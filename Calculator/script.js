const display = document.querySelector(".display");

const buttons = document.querySelectorAll("buttons");



let currentInput = "";

let operator = "";

let firstValue = null;



buttons.forEach(button => {

 button.addEventListener("click", () => {

  const value = button.textContent;



  // Clear

  if (value === "C") {

   currentInput = "";

   operator = "";

   firstValue = null;

   display.value = "";

   return;

  }



  // Equals

  if (value === "=") {

   if (operator && firstValue !== null && currentInput !== "") {

    const secondValue = parseFloat(currentInput);

    let result;



    switch (operator) {

     case "+":

      result = firstValue + secondValue;

      break;

     case "−":

      result = firstValue - secondValue;

      break;

     case "×":

      result = firstValue * secondValue;

      break;

     case "÷":

      result = secondValue !== 0 ? firstValue / secondValue : "Error";

      break;

    }



    display.value = result;

    currentInput = result.toString();

    operators = "";

    firstValue = null;

   }

   return;

  }



  // Operators

  if (["+", "−", "×", "÷"].includes(value)) {

   if (currentInput !== "") {

    firstValue = parseFloat(currentInput);

    operator = value;

    currentInput = "";

    display.value = firstValue + " " + operator;

   }

   return;

  }



  // Numbers

  currentInput += value;

  display.value = currentInput;

 });

});

