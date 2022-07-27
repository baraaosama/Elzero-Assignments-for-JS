let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let ipreg = /\d+:\w+\d:\d+:\d+:\d+:\d+:\d+:\d+/ig;
console.log(ip.match(ipreg));