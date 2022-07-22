function extractText() {
  // let items = Array.from(document.querySelectorAll('li'))
  let items2 = [...document.querySelectorAll("li")];
  let result = items2.map((e) => e.textContent).join("\n");
  document.getElementById('result').value = result;
  console.log(items2.map((e) => e.textContent).join("\n"));
  // TODO
}
