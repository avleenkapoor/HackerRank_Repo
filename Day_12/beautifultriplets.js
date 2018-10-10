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

// Complete the beautifulTriplets function below.
function beautifulTriplets(d, arr) {

    var i, j, k;
    var cnt = 0;
    
    for (i = 0; i < arr.length; i++) {
    for (j = i+1; j < arr.length; j++) {
        if (arr[j] - arr[i] == d) {
            for (k = j+1; k < arr.length ; k++){
                if ((arr[k]-arr[j]) == d)
                    cnt++;
            }
        }
    }
    }
    return cnt;

    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = beautifulTriplets(d, arr);

    ws.write(result + "\n");

    ws.end();
}