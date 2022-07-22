function addItem() {
    console.log('TODO:...');
    let newItemText = document.getElementById('newItemText')
    let newItemValue= document.getElementById('newItemValue')
    let selectItem = document.getElementById('menu')

    let optionTag = document.createElement('option')
    optionTag.textContent = newItemText.value;
    optionTag.value = newItemValue.value;


    selectItem.appendChild(optionTag)

    newItemText.value = ''
    newItemValue.value = ''
}
