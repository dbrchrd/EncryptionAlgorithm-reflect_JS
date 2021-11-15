const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Your text you want to encrypt : "
});

const ab = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
const no = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var AB = []; var NO = [];
ab.forEach((item, i) => AB.push(item.toUpperCase()));
no.forEach((item, i) => NO.push(item.toUpperCase()));
n0to4 = ["0", "1", "2", "3", "4"]; n5to9 = ["5", "6", "7", "8", "9"];
