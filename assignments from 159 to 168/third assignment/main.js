let time = new Date();
time.setDate(0)
console.log(time);
let arr = ["january", "february", "march", "April", "May", "june", "july", "august"]
console.log(`Previous Month Is ${arr[time.getMonth()]} And Last Day Is ${time.getDate()}`);