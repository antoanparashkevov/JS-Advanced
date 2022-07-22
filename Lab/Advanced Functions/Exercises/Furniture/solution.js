function solve() {
  const tbody = document.querySelector("tbody");
  const [generateBtn, buyBtn] = Array.from(
    document.getElementsByTagName("button")
  );

  //using Closure
  const [inputTextArea, outputTextArea] = Array.from(
    document.querySelectorAll("textarea")
  );
  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);

  //using Closure, we will create an array and full it with rows from generate() and access it from buy()
  const items = [];

  function generate() {
    const arrayOfObj = JSON.parse(inputTextArea.value);
    // console.log(arrayOfObj);

    for (const obj of arrayOfObj) {
      let tableRow = document.createElement("tr");

      //img Column
      //   let tableCol1 = document.createElement("td");
      //   let img = document.createElement("img");
      //   img.src = obj.img;
      //   createColumns("img", obj.img);
      //   tableCol1.appendChild(img);
      //   tableRow.appendChild(tableCol1);
      //or just like this

      let tableCol1 = createColumns("img", obj.img); //this will return our tableCol
      tableRow.appendChild(tableCol1);

      //Name Column
      //   let tableCol2 = document.createElement("td");
      //   let p1 = document.createElement("p");
      //   p1.textContent = obj.name;
      //   tableCol2.appendChild(p1);
      //   tableRow.appendChild(tableCol2);
      //or just like this
      let tableCol2 = createColumns("p", obj.name); //this will return our tableCol
      tableRow.appendChild(tableCol2);

      //Price Column
      //   let tableCol3 = document.createElement("td");
      //   let p2 = document.createElement("p");
      //   p2.textContent = obj.price;
      //   tableCol3.appendChild(p2);
      //   tableRow.appendChild(tableCol3);
      //or just like this
      let tableCol3 = createColumns("p", obj.price); //this will return our tableCol
      tableRow.appendChild(tableCol3);

      //decoration Factory Column
      //   let tableCol4 = document.createElement("td");
      //   let p3 = document.createElement("p");
      //   p3.textContent = obj.decFactor;
      //   tableCol4.appendChild(p3);
      //   tableRow.appendChild(tableCol4);
      //or just like this
      let tableCol4 = createColumns("p", obj.decFactor); //this will return our tableCol
      tableRow.appendChild(tableCol4);

      //for checkboxes
      let tableCol5 = document.createElement("td");
      let input = document.createElement("input");
      input.type = "checkbox";
      tableCol5.appendChild(input);
      tableRow.appendChild(tableCol5);

      tbody.appendChild(tableRow);

      items.push({
        //   row:tableRow,
        // obj,
        //we can spread and object also, that makes all keys from obj to be keys for our pushing object
        ...obj,
        isChecked,
      });

      //using predicate function
      function isChecked() {
        return input.checked;
        //will return true of false
      }
    }
  }

  function buy() {
    let listOfProducts = [];
    let totalPrice = 0;
    let decFactor = 0;
    // console.log(items);
    // console.log(items.filter((object) => object.isChecked()));

    const bought = items.filter((object) => object.isChecked());

    // console.log(bought);

    for (let itemObj of bought) {
      listOfProducts.push(itemObj.name);
      totalPrice += Number(itemObj.price);
      decFactor += Number(itemObj.decFactor);
    }
    decFactor /= bought.length;

    outputTextArea.value = [
      `Bought furniture:  ${listOfProducts.join(", ")}`,
      `Total price: ${totalPrice.toFixed(2)}`,
      `Average decoration factor: ${decFactor.toFixed(2)}`,
    ].join('\n');
  }

  function createColumns(type, content) {
    let td = document.createElement("td");
    let inner;
    if (type == "img") {
      inner = document.createElement("img");
      inner.src = content;
    } else {
      inner = document.createElement("p");
      inner.textContent = content;
    }
    td.appendChild(inner);

    return td;
  }
}
