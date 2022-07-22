function subtract() {
    let firstNumber = document.getElementById('firstNumber').value
    let secondNumber = document.getElementById('secondNumber').value
    let resultNumber = document.getElementById('result');
    resultNumber.textContent = Number(firstNumber) - Number(secondNumber);
}
