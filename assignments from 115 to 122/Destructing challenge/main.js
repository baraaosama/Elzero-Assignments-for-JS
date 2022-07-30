let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [personOne, personTwo, personThree] = myFriends;
if (chosen == 1) {
    ({ title, age, available: a, skills: [, m] } = personOne);
} else if (chosen == 2) {
    ({ title, age, available: a, skills: [, m] } = personTwo);
} else {
    ({ title, age, available: a, skills: [, m] } = personThree);
}
console.log(title);
console.log(age);
if (a == true) {
    console.log("available");
} else {
    console.log("not available");
}
console.log(m);