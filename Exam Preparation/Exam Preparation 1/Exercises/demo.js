const arr = [{name:'Nadia',age:20},{name:"Antoan",age:22}]


const names = arr.map(obj =>obj.name).sort((a,b)=>a.localeCompare(b))
console.log(names)
