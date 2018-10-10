function processData(input) {
    var level = 0, vallies = 0;
    var slopes = input.split("\n", 2)[1];
    for (var i in slopes) {
        level = (slopes.charAt(i) == 'U') ? level + 1 : level - 1;   
        if (level === 0 && slopes.charAt(i) === 'U') {             
            vallies++;                                  
        }
    }
    console.log(vallies);
} 
process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
