// 非递归？？
// 大概明白了，就是按不同的长度来进行merge
// 先是 2 个 2 个，然后 4 个 4 个， 最后合并两个子链表
// 这样需要先遍历一遍，拿到长度（或者中点），while 的条件就是 步长 不超过一半吧