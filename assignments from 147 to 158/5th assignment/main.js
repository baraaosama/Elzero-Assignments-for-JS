const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

console.log(myObj);


Object.defineProperty(myObj, "score", {
    writable: false,

})
Object.defineProperty(myObj, "id", {
    enumerable: false
})
Object.defineProperty(myObj, "country", {
    configurable: false,
    enumerable: false
})
myObj.score = 500;


for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

"username => Elzero"
"score => 1000"
//{ username: 'Elzero', score: 1000, id: 100 }