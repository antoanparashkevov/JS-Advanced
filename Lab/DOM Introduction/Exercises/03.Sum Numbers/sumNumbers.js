function calc() {
    // TODO: sum = num1 + num2
    // console.log('test')
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    // console.log(num1,num2)
    const sum = num1+num2;
    document.getElementById('sum').value = sum
}
