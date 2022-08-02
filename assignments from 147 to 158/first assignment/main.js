class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    static run() {
        return `Car is running now`;
    }
    static stop() {
        return `Car is stopped`;
    }
}

let carOne = new Car("mercedes", 11, 100000);
let carTwo = new Car("bm", 12, 200000);
let carThree = new Car("toyota", 13, 300000);
console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
console.log(Car.run());
// Needed Output

"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"