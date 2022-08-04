let myBirthDay = new Date("6 22 2002")
let today = new Date();
let age = today - myBirthDay;
console.log(`seconds ${age / 1000}`);
console.log(`minutes ${age / 1000 / 60}`);
console.log(`hours ${age / 1000 / 60 / 60}`);
console.log(`days ${age / 1000 / 60 / 60 / 24}`);
console.log(`months ${age / 1000 / 60 / 60 / 24 / 30}`);
console.log(`years ${age / 1000 / 60 / 60 / 24 / 30 / 12}`);
