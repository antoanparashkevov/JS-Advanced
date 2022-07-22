window.addEventListener("load", solve);

function solve() {
    //TODO ....
    // console.log('test')
    const inputs = {
        make: document.getElementById('make'),
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        fuel: document.getElementById('fuel'),
        originalCost: document.getElementById('original-cost'),
        sellingPrice: document.getElementById('selling-price')
    }
    const bodyToPublish = document.getElementById('table-body')
    const bodyToSell = document.getElementById('cars-list')

    const profit = document.getElementById('profit')

    const publishBtn = document.getElementById('publish')

    let sum = 0;

    publishBtn.addEventListener('click', publish)

    function publish(event) {
        event.preventDefault()

        let make = inputs.make.value;
        let model = inputs.model.value;
        let year = inputs.year.value;
        let fuel = inputs.fuel.value;
        let originalCost = inputs.originalCost.value;
        let sellingPrice = inputs.sellingPrice.value;

        //first potential problem with equal sign on originalCost and sellingPrice
        if (make === '' || model === '' || year === '' || fuel === '' || originalCost === '' || sellingPrice === '' || Number(sellingPrice) <= Number(originalCost)) {
            return;
        }

        const tr = document.createElement('tr')
        tr.className = 'row'
        tr.innerHTML = `
        <td>${make}</td>
        <td>${model}</td>
        <td>${year}</td>
        <td>${fuel}</td>
        <td>${originalCost}</td>
        <td>${sellingPrice}</td>
        <td>
        <button class="action-btn edit">Edit</button>
        <button class="action-btn sell">Sell</button>
        </td>
        `

        const editBtn = tr.querySelector('.edit')
        editBtn.addEventListener('click',edit)

        const sellBtn = tr.querySelector('.sell')
        sellBtn.addEventListener('click',sell)

        bodyToPublish.appendChild(tr)

        inputs.make.value = ''
        inputs.model.value = ''
        inputs.year.value = ''
        inputs.fuel.value = ''
        inputs.originalCost.value = ''
        inputs.sellingPrice.value = ''

        function edit(){
            inputs.make.value = make
            inputs.model.value = model
            inputs.year.value = year
            inputs.fuel.value = fuel
            inputs.originalCost.value = originalCost
            inputs.sellingPrice.value = sellingPrice
            tr.remove()
        }
        function sell(){
            sum+=Number(sellingPrice - originalCost);
            const li = document.createElement('li')
            li.className = 'each-list';
            li.innerHTML=
                `
                <span>${make} ${model}</span>
                <span>${year}</span>
                <span>${sellingPrice - originalCost}</span>
                `

            bodyToSell.appendChild(li)
            profit.textContent = sum.toFixed(2)
            // console.log(sum)
            tr.remove();

        }

    }
}
