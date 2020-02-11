// bfs 2
// temp ** 0.5, interesting
var numSquares = function(n) {
    if(n === 0) return 0;
	let queue = [n], res = 0;
	let set = new Set();

	while(queue.length) {
	  res++;
      let size = queue.length;
      // 这里多用了一个 while 其实是一个目的，就是将上一层级遍历完，就将 层级加一
	  while(size-- > 0) {
	    let temp = queue.shift();
	    for(let i = parseInt(temp ** 0.5); i > 0 ; i--) {
	      let t = temp - i ** 2;
	      if(t === 0) return res;
	      if(!set.has(t)) {
	        queue.push(t);
	        set.add(t);
	      }
	    }
	  }
	}
	return res;
};