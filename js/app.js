function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById("display_pin").value = pin;
}
document.getElementById("key_pad").addEventListener("click", function (event) {
    const numbers = event.target.innerText;
    const calcInput = document.getElementById("typed_numbers");
    if (isNaN(numbers)) {
        if (numbers == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + numbers;
        calcInput.value = newNumber;
    }
})
function verifyPin() {
    const pin = document.getElementById("display_pin").value;
    const typedPin = document.getElementById("typed_numbers").value;

    const successMessage = document.getElementById("notify_success");
    const failMessage = document.getElementById("notify_fail");
    if (pin == typedPin) {
        successMessage.style.display = "block";
        failMessage.style.display = "none";
    }
    else {
        failMessage.style.display = "block";
        successMessage.style.display = "none";

    }
}