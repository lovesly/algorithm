/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // cache or modify the original array??
    // backtracking
    if (!board || board.length === 0 || board[0].length === 0 || !word) 
        return false;
    const m = board.length, n = board[0].length;
    let found = false;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            search(i, j, word);
            if (found) break;
        }
    }
    return found;
    
    function search(i, j, word) {
        if (found) return;
        // check boundry
        if (i < 0 || j < 0 || i >= m || j >= n) return;
        // if found the letter at cur pos, keep searching from all directions
        if (board[i][j] !== word[0]) return;
        
        if (word.length === 1) {
            found = true;
            return;
        }
        
        board[i][j] += 'M';
        let w = word.slice(1);
        search(i-1, j, w);
        search(i+1, j, w);
        search(i, j-1, w);
        search(i, j+1, w);
        board[i][j] = board[i][j].substr(0, 1);
    }
};