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


let tocode = "";
rl.prompt();
rl.on('line', (text) => {
  tocode = text;
  //console.log("Text to encrypt :", `\x1b[36m${tocode}\x1b[0m`);
  let tcarr = tocode.split(""); let tcarrnew = "";
  tcarr.forEach((item, i) => {
    if (ab.includes(item)) tcarrnew += no[ab.indexOf(item)];
    else if (AB.includes(item)) tcarrnew += NO[AB.indexOf(item)];
    else if (no.includes(item)) tcarrnew += ab[no.indexOf(item)];
    else if (NO.includes(item)) tcarrnew += AB[NO.indexOf(item)];
    else if (n0to4.includes(item)) tcarrnew += n5to9[n0to4.indexOf(item)];
    else if (n5to9.includes(item)) tcarrnew += n0to4[n5to9.indexOf(item)];
    else tcarrnew += item;
  });
  console.log("Text encrypted :", `\x1b[36m${tcarrnew}\x1b[0m`);
  rl.close();
});
