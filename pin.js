function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

document.getElementById("generate-pin").addEventListener("click", function() {
  const pin = getPin();
  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});

document.getElementById("calculator").addEventListener("click", function(event){
  const number = event.target.innerText;
  const typedNumberField = document.getElementById("typed-number");
  const prevTypedNumber = typedNumberField.value;
  if (isNaN(number)) {
    if (number === "C") {
      typedNumberField.value = "";
    } else if (number === "<") {
      const digits = prevTypedNumber.split("");
      digits.pop();
      const remainingDigits = digits.join("");
      typedNumberField.value = remainingDigits;
    }
  } else {
    const newTypedNumber = prevTypedNumber + number;
    typedNumberField.value = newTypedNumber;
  }
});

document.getElementById("verify-pin").addEventListener("click", function () {
  const displayPinField = document.getElementById("display-pin");
  const currentPin = displayPinField.value;

  const typedNumberField = document.getElementById("typed-number");
  const typedNumber = typedNumberField.value;
  const pinSuccessMessage = document.getElementById("pin-success");
  const pinFailureMessage = document.getElementById("pin-failure");
  if (typedNumber === currentPin) {
    // const pinSuccessMessage = document.getElementById("pin-success");
    pinSuccessMessage.style.display = "block";
    pinFailureMessage.style.display = "none";
  } else {
    // const pinFailureMessage = document.getElementById("pin-failure");
    pinFailureMessage.style.display = "block";
    pinSuccessMessage.style.display = "none";
  }
});
