window.addEventListener('load', solution);

function solution() {
    // console.log('TODO: Write the missing functionality!');

    //take all buttons
    const submitBtn = document.querySelector('#submitBTN')
    const editBtn = document.querySelector('#editBTN')
    const continueBtn = document.querySelector('#continueBTN')
    const inputPreview = document.getElementById('infoPreview');

    const inputValues = Array.from(document.getElementById('form').querySelectorAll('input'))
    const labelValues = Array.from(document.getElementById('form').querySelectorAll('label'))
    inputValues.pop()

    const fullName = inputValues[0]
    const email = inputValues[1]
    submitBtn.addEventListener('click', (e) => {
        // console.log(e.target)
        if (fullName.value && email.value !== '') {
            for (let i = 0; i < inputValues.length; i++) {
                // console.log(labelValues[i])
                const liElement = document.createElement('li')
                liElement.textContent = `${labelValues[i].textContent} ${inputValues[i].value}`
                inputPreview.appendChild(liElement)
                inputValues[i].value = ''

            }
            submitBtn.disabled = true;
            editBtn.disabled = false;
            continueBtn.disabled = false;
        }
    })
    editBtn.addEventListener('click', () => {
        const liElements = Array.from(inputPreview.childNodes)
        // console.log(liElements)
        for (let i = 0; i < inputValues.length; i++) {
            inputValues[i].value = liElements[i].textContent.split(': ')[1]
            liElements[i].remove()
        }
        submitBtn.disabled = false;
        editBtn.disabled = true;
        continueBtn.disabled = true;

    })
    continueBtn.addEventListener('click', () => {
        const block = document.getElementById('block')
        block.innerHTML = ''
        const h3 = document.createElement('h3')
        h3.textContent = 'Thank you for your reservation!'
        block.appendChild(h3)

    })
}
