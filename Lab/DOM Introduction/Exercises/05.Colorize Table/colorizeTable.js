function colorize() {
    // let tableRows = document.querySelectorAll('tr')
    // // console.log(tableRows)
    //
    // for (let i = 1; i < tableRows.length; i += 2) {
    //     // console.log(tableRows[i])
    //     tableRows[i].style.background = 'teal'
    // }
    //or with matching the children into the parent to the sequence
   document.querySelectorAll('tr:nth-child(2n)').forEach(el=>el.style.background = 'teal')
}
