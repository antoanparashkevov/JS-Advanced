function sumTable() {
    let rows = [...document.querySelectorAll('tr')].slice(1, -1)

    // console.log(rows)
    let sum = 0
    for (let row of rows) {
        // console.log(row.children)
        // console.log(row.children[row.children.length -1])
        //or
        // let children = [...row.children].slice(-1)
        // console.log(children)
        //or
        sum += Number(row.lastElementChild.textContent)

    }
    // console.log(sum)
    document.getElementById('sum').textContent = sum
}
