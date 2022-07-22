function toggle() {
    let textElement = document.getElementById('extra')
    // let btn = document.getElementsByClassName('button')[0]
    let btn = document.getElementsByTagName('span')[0]
    // console.log(textElement)
    if(btn.textContent === "More"){
        btn.textContent = "Less"
        textElement.style.display= 'block';
    }else{
        btn.textContent = "More"
        textElement.style.display= 'none';
    }
}
