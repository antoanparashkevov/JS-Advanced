function focused() {
  console.log("TODO:...");
  let inputArray = Array.from(document.getElementsByTagName("input")).forEach(
    (input) => {
      input.addEventListener("focus", onFocus); //when we click on the input field, it triggers focus event
      input.addEventListener("blur", onBlur); //when we click out of the current clicked input field, it triggers blur event
      input.addEventListener("change", onChange); //when we click out of the current clicked input field, it triggers blur event
    }
  );
  function onFocus(ev) {
    console.log(ev.target.parentElement);
    ev.target.parentElement.className = "focused";
    ev.target.parentElement.classList.add('focused')
    //classList is the same like Map Object with the same methods for manipulating
  }
  function onBlur(ev) {
    console.log(ev.target.parentElement);
    ev.target.parentElement.className = "";
    ev.target.parentElement.classList.remove('focused')
  }
  function onChange(){
    //change event listener is triggered when we change the value of the input field. 
    //If we don't change it, it doesn't triggered
    //That is the only difference between blur event and change event
      console.log('changed!')
  }
}
