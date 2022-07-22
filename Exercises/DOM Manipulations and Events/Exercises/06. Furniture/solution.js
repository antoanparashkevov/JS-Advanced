function solve() {

    //TODO...
    console.log('Test')
    let [genBtn, buyBtn] = Array.from(document.querySelectorAll('button'))
    genBtn.addEventListener('click', generate)
    buyBtn.addEventListener('click', buy)

    function generate() {
        let input = JSON.parse(document.querySelector('textarea').value)//from JSON we are going to parse to Array
        // input = [{
        // "name": "Sofa",
        // "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg",
        // "price": 150,
        // "decFactor": 1.2
        // }]
        input.forEach(element => {
            let tableRow = document.createElement('tr')
            let tableData1 = document.createElement('td')
            let imgTag = document.createElement('img')
            imgTag.src = element.img
            tableData1.appendChild(imgTag)
            tableRow.appendChild(tableData1)
            let tableData2 = document.createElement('td')
            let pTag = document.createElement('p')
            pTag.textContent = element.name
            tableData2.appendChild(pTag)
            tableRow.appendChild(tableData2)
            let tableData3 = document.createElement('td')
            let pTag2 = document.createElement('p')
            pTag2.textContent = +element.price;
            tableData3.appendChild(pTag2)
            tableRow.appendChild(tableData3)
            let tableData4 = document.createElement('td')
            let pTag3 = document.createElement('p')
            pTag3.textContent = +element.decFactor;
            tableData4.appendChild(pTag3)
            tableRow.appendChild(tableData4)
            let tableData5 = document.createElement('td')
            let input = document.createElement('input')
            input.type = 'checkbox';
            tableData5.appendChild(input)
            tableRow.appendChild(tableData5)
            document.querySelector('tbody').appendChild(tableRow)
        })
    }

    function buy() {
        let checkboxes = Array.from(document.querySelectorAll("tbody input[type='checkbox']")).filter(checkbox => checkbox.checked)
        //to filter only this checkboxes that is with property checked (marked)
        let bought = [];
        let price = 0;
        let decFactor = 0;
        checkboxes.forEach(checkbox => {//checkbox.parentElement => td checkbox.parentElement.parentElement => tr
            let parent = checkbox.parentElement.parentElement;
            let data = Array.from(parent.querySelectorAll('p'))
            bought.push(data[0].textContent)//data[0] is the name of the furniture
            price += Number(data[1].textContent)
            decFactor += Number(data[2].textContent)
        })
        let outputArea = document.querySelectorAll('textarea')[1];
        outputArea.value += `Bought furniture: ${bought.join(', ')}\r\n`//to go to the next line
        outputArea.value += `Total price: ${price.toFixed(2)}\r\n`//to go to the next line
        outputArea.value += `Average decoration factor: ${decFactor / checkboxes.length}`



    }
}
