let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let reg = /\bos\d*o\b/ig;
console.log(specialNames.match(reg)) 