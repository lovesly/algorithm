// bfs, 入度表？？
// 这个是头一次听说。

var canFinish = function(numCourses, prerequisites) {
  const indegrees = Array(numCourses).fill(0);
  for (let cp of prerequisites) {
    indegrees[cp[0]]++;
  }
  const queue = [];
  // 看样子每个节点的 入度 是不同的，0 意味着这个节点没有依赖？或者前驱节点？
  for (let i = 0; i < numCourses; i++) {
    if (indegrees[i] === 0) queue.push(i);
  }
  // 原理是什么?
  while (queue.length !== 0) {
    const pre = queue.shift();
    numCourses--;
    for (let req of prerequisites) {
      if (req[1] !== pre) continue;
      // 这一轮只处理 pre 的相邻节点
      if (--indegrees[req[0]] === 0) queue.push(req[0]);
    }
  }
  return numCourses === 0;
}