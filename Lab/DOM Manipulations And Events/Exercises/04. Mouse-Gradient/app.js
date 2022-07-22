function attachGradientEvents() {
  console.log("TODO:..."); //attachGradientEvents is triggered when we load the page because of onload event
  const gradient = document.getElementById("gradient");
  gradient.addEventListener("mousemove", offSet);
  const result = document.getElementById("result");

  function offSet(ev) {
    //   console.log(ev)
    //   gradient.removeEventListener('mousemove',offSet);
    //   we want to get the offset to the width of the block (offsetx, not offsety)
    //   console.log(Math.floor(ev.offsetX / gradient.clientWidth * 100));
    result.textContent = Math.floor((ev.offsetX / gradient.clientWidth) * 100) + "%";
  }
}
