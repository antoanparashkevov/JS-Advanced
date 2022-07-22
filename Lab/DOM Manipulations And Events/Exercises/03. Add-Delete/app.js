function addAndDeleteItem() {
  console.log("TODO:...");
  //take the value from the input field
  let inputValue = document.getElementById("newItemText");

  //create new li element
  let li = document.createElement("li");

  //assign the input value to the new li element as a text content
  li.textContent = inputValue.value;

  //select ul and append as a child the new li element
  let ul = document.getElementById("items");
  ul.appendChild(li);

  //clear the input value after the click event handling
  inputValue.value = "";

  //create the anchor tag and set as a text content [Delete]
  let anchorTag = document.createElement("a"); //we create it but only on the memory, not on the screen
  anchorTag.textContent = "[Delete]";
  anchorTag.href = '#'
  li.appendChild(anchorTag); //we append the anchor tag to the list item
  anchorTag.addEventListener("click", removeElement);
  function removeElement(event) {
    console.log(event.target);//the current anchor that triggers the event, not all anchor tags on the screen
    // event.target.remove()
    //to delete the parent element, not the anchor tag only
    console.log(event.target.parentElement)//li achieve to get the li element
    event.target.parentElement.remove();
  }
}
