const fs = require("fs");
const io = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

let input = Number(fs.readFileSync(io).toString());
let num = input;

let sum;
let i = 0;

while (true) {
    i++;
    sum = Math.floor(num / 10) + (num % 10);
    num = (num % 10) * 10 + (sum % 10);
    if (input === num) break;
}
console.log(i);
