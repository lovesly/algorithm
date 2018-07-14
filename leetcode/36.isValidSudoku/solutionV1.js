/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    // set or hashmap or array
    // colmaps
    let map, maps = [];
    for (let i = 0; i < 9; i++) maps.push([]);
    
    // check each row and col
    for (let i = 0; i < 9; i++) {
        map = [];
        let row = board[i];
        for (let j = 0; j < 9; j++) {
            if (j == 5 && (i == 3 || i == 6)) {
                console.log(i, j);
            }
            if (map[row[j]]  != undefined || maps[j][row[j]] != undefined) {
                return false;
            } else if (row[j] != '.') {
                map[row[j]] = row[j];
                maps[j][row[j]] = row[j];
            }
        }
    }
    // check 3x3 block
    let sx, sy;
    // maps fill 是引用
    // maps = Array(3).fill([[], [], []]);
    maps = [];
    for (let i = 0; i < 3; i++) maps.push([[], [], []]);
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let val = board[i][j];
            sx = ~~(i/3);
            sy = ~~(j/3);
            if (maps[sx][sy][val] != undefined) {
                return false;
            } else if (val != '.') {
                maps[sx][sy][val] = val;
            }
        }
    }

    return true;
};

const data = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]];

// test

console.log(isValidSudoku(data));
// shame on you, asshole.
// use too much space