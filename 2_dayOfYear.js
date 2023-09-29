function dayOfYear(str) {

    let day = new Date(str);

    return  (new Date(str) - new Date(day.getFullYear(), 0, 0)) / 86400000
      
}

console.log(dayOfYear("12/13/2020"));
console.log(dayOfYear("12/17/2020"));
console.log(dayOfYear("11/16/2020"));
console.log(dayOfYear("1/9/2019"));
console.log(dayOfYear("3/1/2004"));
console.log(dayOfYear("12/31/2000"));