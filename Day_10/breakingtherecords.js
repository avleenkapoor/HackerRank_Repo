'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    var min=scores[0],max=scores[0];  var counti=0,countj=0;
for(var i=0;i<scores.length;i++)
    {
        if(max<scores[i]) {
                max=scores[i];
                counti++;
            }
         if(min>scores[i]) {
                min=scores[i];
                countj++;
            }
    }
    var res=[];
    res[0]=counti;
    res[1]=countj;
    return res;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}