'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the encryption function below.
function encryption(s) {
  s = s.trim();
    var len = s.length;
    var arr =  s.split("");
    var row = Math.floor(Math.sqrt(len));
    var col = Math.ceil(Math.sqrt(len));
    var str = "";
    if(row * col < len ) {
        row = col;
    }
    for(var i = 0; i < col; i++){
        for(var j = i; j < s.length; j = j + col ){
            str+=s.charAt(j);
        }
        str+=" ";
    }    
    return str;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
