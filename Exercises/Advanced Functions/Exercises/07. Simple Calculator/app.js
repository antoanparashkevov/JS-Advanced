function calculator() {


    let inputField1;
    let inputField2;
    let resultField;

    return {
        init,
        add,
        subtract
    }

    function init(field1, field2, resultField1) {
        inputField1 = document.querySelector(field1)
        inputField2 = document.querySelector(field2)
        resultField = document.querySelector(resultField1)
    }

    function add() {
        resultField.value = Number(inputField1.value) + Number(inputField2.value)
    }

    function subtract() {
        resultField.value = Number(inputField1.value) - Number(inputField2.value)
    }
}




