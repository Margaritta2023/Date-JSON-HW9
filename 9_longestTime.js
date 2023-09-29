function longestTime(h, m, s) {

    const hoursToSeconds = h * 60 * 60;
    const minutesToInSeconds = m * 60 ;

    const longets = Math.max(hoursToSeconds, minutesToInSeconds, s);

    return (longets === hoursToSeconds) ? h : (longets === minutesToInSeconds) ? m : s;
}

console.log(longestTime(1, 59, 3598))
console.log(longestTime(2, 300, 15000))
console.log(longestTime(15, 955, 59400))