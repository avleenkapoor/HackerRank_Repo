'use strict';

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

// Complete the staircase function below.
function staircase(n) {
var s="";
var i,j,k,l;
    k=n;
    for(i=1;i<=n;i++){
        s="";
     for(j=0;j<k-1;j++) {
      s=s+" ";
     }
        l=i;
        while(l!=0){
           s+="#";            
            l--;
        }
        console.log(s);
      k--;
 
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
