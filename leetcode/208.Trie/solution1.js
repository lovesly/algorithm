/**
 * Initialize your data structure here.
 */
var Trie = function(key) {
  this.key = key;
  this.children = [];
  // 是否为叶子节点
  // 其实没有 children 就是叶子节点
  this.isEndOfWord = false;
  // 是否有词以当前节点为结尾
  this.wordEndHere = false;
};

Trie.prototype._insertNext = function(restWord) {
  const next = new Trie();
  // 递归调用
  next.insert(restWord);
  this.children.push(next);
}

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
// 需要整理，太丑陋了。有这么麻烦吗？？
Trie.prototype.insert = function(word) {
  // 记得设置 isEndOfWord 和 wordEndHere
  if (!word) return;
  const char = word[0];
  const restWord = word.slice(1);
  if (char == this.key) {
      // 已经有节点，插入下一词
      // 先在 children 里找
      if (!restWord.length) {
          // 设置结尾
          this.wordEndHere = true;
          return;
      } else {
          let i = 0;
          let children = this.children;
          let cur;
          while (i < restWord.length) {
              const nextChar = restWord[i];
              cur = children.find((item) => item.key == nextChar);
              if (cur) {
                  children = cur.children;
                  i++;
              } else {
                  break;
              }
          }
          // 两种情况，1 是 i == restWord.length
          // 另一种是，break 出来了
          if (i < restWord.length) {
              this._insertNext(restWord.slice(i));
          } else {
              cur.wordEndHere = true;
          }
      }
  } else if (this.key === undefined) {
      // 新节点，放心插
      this.key = char;
      if (restWord.length) {
          this._insertNext(restWord);
      } else {
          // 设置结尾
          this.wordEndHere = true;
      }
  } else {
      return;
  }
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  
};

// test
var obj = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");   
trie.search("app");     // 返回 true
