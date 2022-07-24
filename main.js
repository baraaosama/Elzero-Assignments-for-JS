let value = prompt("Print Number From – To");
count = 0;
for (i = 0; i < value.length; i++) {
    if (value[i] === "-") {
        break;
    }
    count += 1;
}
let firstNumber = Number(value.slice(0, count));

let secondNumber = Number(value.slice(count += 1, value.length));

if (firstNumber > secondNumber) {
    for (i = secondNumber; i < firstNumber + 1; i++) {
        console.log(i);
    }
} else {
    for (i = firstNumber; i < secondNumber + 1; i++) {
        console.log(i);
    }
}


