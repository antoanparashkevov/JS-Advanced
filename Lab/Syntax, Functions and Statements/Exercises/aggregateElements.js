function aggregateElements(args) {
  let sumNormal = 0;
  let sumInverse = 0;
  let concat = "";
  for (let i = 0; i < args.length; i++) {
    sumNormal += args[i];
  }
  for (let i = 0; i < args.length; i++) {
    sumInverse += 1 / args[i];
  }
  for (let i = 0; i < args.length; i++) {
    args[i] = args[i].toString();
    concat += args[i];
  }
  console.log(sumNormal);
  console.log(sumInverse);
  console.log(concat);
}
aggregateElements([1, 2, 3]);
