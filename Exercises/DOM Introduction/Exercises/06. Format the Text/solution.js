function solve() {
    //TODO
    //let inputText = document.getElementsByTagName('textarea')[0].textContent
    //it is wrong with textContent to manipulate textarea,
    //because this is the same like input field, we can enter text inside of the block
    let inputText = document.getElementsByTagName('textarea')[0].value;
    let toOutput = document.getElementById('output')
    let sentencesArray = inputText.split('.').filter(sentence => sentence.length !== 0)

    //because splice manipulate the original array (sentencesArray), we will use in while loop this condition
    while (sentencesArray.length > 0) {
        let firstThreeSentences = sentencesArray.splice(0, 3);
        // console.log(firstThreeSentences)
        firstThreeSentences = firstThreeSentences.join('. ') + '.'
        // console.log(firstThreeSentences)
        let pTag = document.createElement('p');
        // console.log(pTag)
        pTag.textContent = firstThreeSentences;
        // console.log(pTag)
        toOutput.appendChild(pTag)//to create a children element to this parent element
    }

    // console.log(inputText)
    // console.log(toOutput)
    // console.log(sentencesArray)

}
