function search() {
    let listElements = document.querySelectorAll('ul#towns li')
    let showingResults = document.getElementById('result')
    let searchingText = document.getElementById('searchText').value
    let matchCounter = 0;
    for (let element of listElements) {
        element.style.fontWeight = 'normal'
        element.style.textDecoration = ''
        let textOfElement = element.textContent;
        if (textOfElement.includes(searchingText)) {
            matchCounter++;
            element.style.fontWeight = 'bold';
            element.style.textDecoration = 'underline'
        }
    }

    // console.log(listElements)
    showingResults.textContent = `${matchCounter} matches found`
}

