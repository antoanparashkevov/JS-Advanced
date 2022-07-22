function deleteByEmail() {
    //read input field
    const inputValue = document.querySelector('input[name="email"]').value//selecting by an attribute

    //repeat for every table row
    //compare text content with input field value
    //delete if we match any mail
    const allRows = [...document.querySelectorAll('tbody tr')];//this will return an array
let found = false
    for (let row of allRows) {
        console.log(row.children[1].textContent)
        if(row.children[1].textContent === inputValue){
            // const parent = row.parentNode;//this will return tbody;
            // parent.removeChild(row)
            row.remove()
            found = true
        }
    }
    //display result to the screen

    //with ternary operator or like this
    const result = document.getElementById('result')
    if(found){
        result.textContent = 'Deleted.'
    }else{
        result.textContent = "Not found."
    }
}
