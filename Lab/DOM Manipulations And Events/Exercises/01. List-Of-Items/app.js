function addItem() {
    console.log('TODO:...');
    //take the value from the input field
    let inputValue = document.getElementById('newItemText');
    //create new li element
    let li = document.createElement('li')
    //assign the input value to the new li element as a text content
    li.textContent = inputValue.value
    //select ul and append as a child the new li element
    let ul = document.getElementById('items')
    ul.appendChild(li)
    //clear the input value after the click event handling
    inputValue.value = ""

}
