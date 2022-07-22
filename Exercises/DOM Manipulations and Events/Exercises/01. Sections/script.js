function create(words) {
    //this function is loading when we start the application
    console.log('TODO:...');


    function reveal(event) {//when we trigger the event, we set to the children the style property named display to ''
        // console.log(event)
        event.currentTarget.children[0].style.display = '';//because we only have one children element
        // event.target
    }

    let div = document.getElementById('content')

    for (let word of words) {
        //when we load the application, we fill the newly created paragraphs with a content from our array and set the style to that newly created tag to display:none
        const divEl = document.createElement('div')
        const p = document.createElement('p')
        //we created two HTML elements but on the memory, not on the DOM tree
        p.textContent = word;
        p.style.display = 'none';
        divEl.appendChild(p)//we attach on the newly created div element our paragraph
        divEl.addEventListener('click', reveal)//we add an event listener of type click
        div.appendChild(divEl)//we add this divEl to the DOM tree

        //this will loop 4 times because our array (words) has a length of 4
    }
}

//currentTarget is the element that we attached the event listener
//target is the element, that we clicked and the element that triggers the event
