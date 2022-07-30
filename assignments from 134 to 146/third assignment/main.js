let phone = "+(995)-123 (4567)";
let reg = /\+\(\d+\)-\d+ \(\d+\)/ig;
console.log(phone.match(reg)) 