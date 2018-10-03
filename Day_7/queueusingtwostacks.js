process.stdin.resume();
process.stdin.setEncoding("ascii");
let currentLine = 0;
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   _input = _input.split('\n');
    processData(_input);
});
function readLine() {
    return _input[currentLine++];
}

function processData(input) {
    const testCases=parseInt(readLine(), 10);
    
    var stack1 = [];
    var stack2 = [];
    for(let i=0;i<testCases;i++){
        const nq = readLine().replace(/\s+$/g, '').split(' ');
        var t = parseInt(nq[0]);
        if(t==1){
            let element = parseInt(nq[1]);  
            stack1.push(element);
        }else{
            if (stack2.length==0) {
                while(stack1.length > 0 ) {
                    stack2.push(stack1.pop());
            } 
          }
        }
         if(t==2){
            stack2.pop();
        }else if(t==3){
            console.log(stack2[stack2.length-1]);
        }
    }
}