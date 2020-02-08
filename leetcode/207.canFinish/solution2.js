// 拓扑排序？
// 是图论的东西。。
// dfs
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 真聪明啊，一个flag， 0， -1， 1 就可以表示3节点访问情况。
// 同时也避免了重复计算，看来有必要看一下，图论相关的东西。
var canFinish = function(numCourses, prerequisites) {
  // dfs
  const flags = Array(numCourses).fill(0);
  const map = [];
  for (let o of prerequisites) {
      if (!map[o[0]]) map[o[0]] = [o[1]];
      else map[o[0]].push(o[1]);
  }
  for (let i = 0; i < numCourses; i++) {
      if (!dfs(map, flags, i)) return false;
  }
  return true;
};

const dfs = (map, flags, i) => {
  if (flags[i] === -1) return true;
  if (flags[i] === 1) return false;
  // 第一次访问
  const neighbours = map[i];
  if (!neighbours) return true;
  flags[i] = 1;
  for (let i = 0; i < neighbours.length; i++) {
      if (!dfs(map, flags, neighbours[i])) return false;
  }
  flags[i] = -1;
  return true;
};