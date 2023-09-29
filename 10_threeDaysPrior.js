function threeDaysAgo(date) {

    let newDay = new Date(date-(216000 * 1000))

    return '"' + newDay.getFullYear() + "-" + 
    ((newDay.getMonth() < 9) ? ("0"+(newDay.getMonth()+1)) : (newDay.getMonth()) + 1)  + "-" + 
    ((newDay.getDate() < 10) ? ("0"+newDay.getDate()) : newDay.getDate()) + '"'
}

console.log(threeDaysAgo( new Date ( 2018 , 0 , 1 ))) // "2017-12-29"
console.log(threeDaysAgo( new Date ( 2015 , 5 , 17 )))// "2015-06-14"
console.log(threeDaysAgo( new Date ( 1965 , 3 , 15 )))// "1965-04-12"
console.log(threeDaysAgo( new Date ( 1965 , 3 , 5 )))