function dayInMonth(month,year){
let date = new Date(year, month)
let day = date.getUTCDate()
console.log(day)
}
dayInMonth(1,2022)