/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || !grid.length) return 0;
  let counter = 0;
  const m = grid.length, n = grid[0].length;
  const dfs = (i, j) => {
      counter++;
      // 将代表此岛的数值 += counter
      const mark = counter + 1;
      const st = [[i, j]];
      while (st.length) {
          const cur = st.pop();
          const [i, j] = cur;
          if (grid[i][j] === mark) continue;
          grid[i][j] = mark;
          // 其实这里会有重复push的情况。会多几次循环。所以上方检测一下，省掉这四个操作。
          if (i > 0 && grid[i - 1][j] == 1) st.push([i-1, j]); // up
          if (j < n - 1 && grid[i][j+1] == 1) st.push([i, j+1]); // right
          if (i < m - 1 && grid[i+1][j] == 1) st.push([i+1, j]); // down
          if (j > 0 && grid[i][j-1] == 1) st.push([i, j-1]); // left
      }
  };
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] == 1) {
              dfs(i, j); 
          }
      }
  }
  return counter;
};