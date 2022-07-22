function solve() {
    document.getElementById('add').addEventListener('click', submitForm)
    //collect field values
    const [_,openSection,progressSection,completeSection] = Array.from(document.querySelectorAll('section')).map(section=>section.children[1])
    const inputs = {
        task: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    }

    function submitForm(event) {
        event.preventDefault()
        const article = document.createElement('article')
        article.appendChild(createElement('h3', inputs.task.value))
        article.appendChild(createElement('p', `Description: ${inputs.description.value}`))
        article.appendChild(createElement('p', `Due Date: ${inputs.date.value}`))
        const div = document.createElement('div')
        div.className = 'flex'
        // div.appendChild(createElement('button', 'Start', 'green'))
        // div.appendChild(createElement('button', 'Delete', 'red'))
        const startBtn = createElement('button', 'Start', 'green')
        div.appendChild(startBtn)

        const deleteBtn = createElement('button', 'Delete', 'red')
        div.appendChild(deleteBtn)

        const finishBtn = createElement('button', 'Finish', 'orange')

        article.appendChild(div)

        openSection.appendChild(article)
        Object.values(inputs).forEach(element=>element.value = "")
        deleteBtn.addEventListener('click',onDelete)
        startBtn.addEventListener('click',onStart)
        finishBtn.addEventListener('click',onFinish)

        function onDelete(){
            article.remove()
        }
        function onStart(){
            startBtn.remove();
            div.appendChild(finishBtn)
            progressSection.appendChild(article)
        }
        function onFinish(){
            div.remove()
            // deleteBtn.remove()
            // finishBtn.remove()
            completeSection.appendChild(article)
        }
    }

    function createElement(type, content, className) {
        const element = document.createElement(type)
        element.textContent = content
        if (className) {
            element.className = className
        }
        return element
    }
}
