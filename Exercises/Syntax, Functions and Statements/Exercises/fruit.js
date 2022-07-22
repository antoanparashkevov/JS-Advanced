function fruit(fruit, grams, kgPrice) {
  let kg = grams / 1000;
  // console.log(kg)
  let totalPrice = kg * kgPrice;
  // console.log(totalPrice)
  console.log(
    `I need $${totalPrice.toFixed(2)} to buy ${kg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
fruit("orange", 2500, 1.8);
