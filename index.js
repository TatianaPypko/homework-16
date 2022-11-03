function consoleLogger(value) {
  console.log(value);
}

let array = [],
  data,
  amount;

while (isNaN(parseFloat(amount)) && !isFinite(amount)) {
  amount = +prompt("Enter amount");
}

for (let i = 0; i < amount; i++) {
  data = prompt("Enter a number");
  if (data) {
    array.push(data);
  }
}
consoleLogger(array);

array.sort((a, b) => a - b);
consoleLogger(array);

array.splice(1, 3);
consoleLogger(array);
