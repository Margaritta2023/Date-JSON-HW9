function monthsInterval(month1, month2) {

    let months = ["January", "February", "March", "April", "May",
     "June", "July", "August", "September", "October", "November", "December"]
    
    let firstMonth = month1.getMonth();
    let secondtMonth = month2.getMonth();
  
    if (((month2 - month1)) >= 365*24*60*60*1000) {
        return months;
    }
    else {
        if(firstMonth <= secondtMonth) return months.slice(firstMonth, secondtMonth + 1)
        else  return months.slice(firstMonth, 12).concat( months.slice(0, secondtMonth + 1))
            
    }   

}



// let january = new Date(2017, 0, 1); 
// let march = new Date(2017, 2, 1); 
// console.log(monthsInterval(january,march))

let december = new Date(2017, 11, 1); 
let january =new Date(2018, 0, 1);
console.log(monthsInterval(december,january) )

// let january2017 = new Date(2017, 0, 1);
// let january2018 = new Date(2018, 0, 1);
// console.log(monthsInterval(january2017, january2018))