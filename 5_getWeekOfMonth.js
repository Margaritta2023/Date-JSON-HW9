function getWeekOfMonth (date) {
    let day = date.getDay();
    if(date.getDate() <= day) return 1;
    else return Math.ceil(date.getDate() / 7)
}

console.log(getWeekOfMonth(new Date(2017, 10, 9)))
console.log(getWeekOfMonth(new Date(2023, 9, 23)))