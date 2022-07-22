function mathOperators(a,b,arithmetic){
      switch(arithmetic){
          case "+": return a+b;break;
          case "-": return a-b;break;
          case "*":return a*b;break;
          case "/":return a/b;break;
          case "**":return a**b;break;
          case "%":return a%b;break;
      }
     
}
console.log(mathOperators(4, 2, '%'))