var exist = function(board, word) {
    if (board.length === 0 || board[0].length === 0) return false;
    if (word.length === 0) return true;
    let height = board.length, width = board[0].length;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (dfs(word, 0, j, i)) {
                return true;
            }
        }
    }
    return false;
    
    function dfs(word, index, x, y) {
        if (index === word.length) return true;
        if (x < 0 || x > width - 1 || y < 0 || y > height - 1) {
            return false;
        }
        if (board[y][x] !== word[index]) {
            return false;
        } else {
            let temp = board[y][x];
            board[y][x] = 0;
            let newIndex = index + 1
            let check = dfs(word, newIndex, x + 1, y) || dfs(word, newIndex, x - 1, y) || dfs(word, newIndex, x, y + 1) || dfs(word, newIndex, x, y - 1);
            board[y][x] = temp;
            return check;
        }
    }
};
// return a boolean value, I guess it makes more sense