function greatestCommonDivisor(a, b) {
  if (b) {
    return greatestCommonDivisor(b, a % b);//a-40,b-30,a-30,b-10,a-10,b-0, because 30:10 = 3 without any residue
  }else{
      return a;
  }
}
console.log(greatestCommonDivisor(30, 40));
