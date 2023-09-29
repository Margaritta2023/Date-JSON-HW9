function getDay (str) {
    let dayOfWeek = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednsday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }
    let day = new Date(str);
    return  dayOfWeek[day.getDay()]
    
} 

console.log(getDay("12/07/2016"));
console.log(getDay("09/04/2016"));
console.log(getDay("12/08/2011"));