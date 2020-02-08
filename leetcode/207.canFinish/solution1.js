// map, dfs
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 有点丑陋。。超级慢，简直耻辱
// 首先构建 map 遍历了一遍。
// 然后，重复验证了大量的的东西
var canFinish = function(numCourses, prerequisites) {
  const map = new Map();
  // duplicate prerequisites?
  // construct the map
  // 也许不用 map 也可以
  for (let i = 0; i < prerequisites.length; i++) {
      const cur = prerequisites[i];
      if (map.has(cur[0])) {
          map.set(cur[0], [...map.get(cur[0]), cur[1]]);
      } else {
          map.set(cur[0], [cur[1]]);
      }
  }
  // 回溯 dfs? 递归好写一些
  const validate = (key) => {
      const st = map.get(key) ? map.get(key).map(item => [item, [key]]) : [];
      while (st.length) {
          const cur = st.pop();
          const dep = cur[1];
          const _key = cur[0];
          const val = map.get(_key);
          if (val) {
              // 验证依赖
              if (!check(val, dep)) {
                  return false;
              } else {
                  // push next level to stack
                  for (let i of val) {
                      st.push([i, [...dep, _key]]);
                  }
              }
          }
      }
      return true;     
  };

  // fn to check dependencies
  const check = (vals, deps) => {
      for (let i = 0; i < vals.length; i++) {
          if (deps.includes(vals[i])) return false;
      }
      return true;
  }; 

  // main fn
  for (let i of map.keys()) {
      if (!validate(i)) return false;
  }
  return true;
};