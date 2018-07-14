/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i=0; i<9; i++){
    let objH={}, objV={}
    for(let j=0; j<9; j++){
        let cur1 = board[i][j], cur2 = board[j][i];
        if(cur1!=='.'){
            if(objH[cur1]) return false;
            objH[cur1]=1;
        }
        if(cur2!=='.'){
            if(objV[cur2]) return false;
            objV[cur2]=1;
        }
    }
}
for(let i=0; i<9; i++){
    let obj={}, m1=Math.floor(i/3)*3, m2=(i%3)*3;
    for(let j=0; j<3; j++){
        for(let k=0; k<3; k++){
            let cur = board[m1+j][m2+k];
            if(cur!=='.'){
                if(obj[cur]) return false;
                obj[cur]=1;
            }
        }
    }
}
return true;
};

// basically it's the same.