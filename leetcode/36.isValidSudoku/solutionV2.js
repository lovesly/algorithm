/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var colArr = [];
    var rowArr = [];
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var v = board[i][j];
        if (v !== '.') {
          if (colArr.indexOf(v) !== -1) {
            return false;
          }
          colArr.push(v);
        }
        v = board[j][i];
        if (v !== '.') {
          if (rowArr.indexOf(v) !== -1) {
            return false;
          }
          rowArr.push(v);
        }
      }
      colArr = [];
      rowArr = [];
    }
    var rectArr = [];
    for (var i = 0; i < 9; i++) {
      for (var k = Math.floor(i / 3) * 3; k < Math.floor(i / 3) * 3 + 3; k++) {
        for (var j = i % 3 * 3; j < i % 3 * 3 + 3; j++) {
          var v = board[k][j];
          if (v !== '.') {
            if (rectArr.indexOf(v) !== -1) {
              return false;
            }
            rectArr.push(v);
          }
        }
      }
      rectArr = [];
    }
    return true;
  };

  // use a single array instead