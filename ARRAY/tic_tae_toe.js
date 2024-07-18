console.log("Tic Tac Toe");

let arr = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        process.stdout.write(" |" + arr[i][j] + "| ");
    }
    console.log();
}