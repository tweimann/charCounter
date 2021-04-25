var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a String...\n', (answer) => {
    console.log(String(answer).length)
    rl.close();
});