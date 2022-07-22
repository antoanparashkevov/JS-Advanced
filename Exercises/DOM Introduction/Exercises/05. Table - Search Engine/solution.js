function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    let rows = document.querySelectorAll('tbody tr')
    let inputField = document.getElementById('searchField')

    function onClick() {
        //   TODO:
        for (let row of rows) {
            row.classList.remove('select')//we remove the class before doing anything because if we have previous search to clear the class 'select'
            // console.log(row.classList)
            // console.log(row.innerHTML)
            // console.log(row.textContent)
            // console.log(row)
            if (inputField.value != "" &&  row.textContent.includes(inputField.value)) {
                row.className = "select"//we add the class with the style defined in template.css
            }
        }
        inputField.value = ''
    }
}
