// 改良版，second pass，todo
// 思想是这样，去掉 key，和 children，children 改名字为 keys。
// 代表本节点的值，因为本节点可以有多个字母，（solution1中我以为 root 只能有一个字母。。）
// 然后 keys 的 key 为26个字母，value 为下一个 Trie 节点。之前一个 Trie node 只存储一个值，现在一个 Trie node 最多可存 26 个值
// 这样还有个好处，solution1 头部节点是特殊处理的，现在实现了统一。
var Trie = function(key) {
  // 这里用 map 感觉好一些，'key': TrieNode
  this.children = {};
  // 是否有词以当前节点为结尾
  this.wordEndHere = false;
};

Trie.prototype._insertNext = function(restWord) {
  // 逻辑有问题，如果 restWord 第一个词已经有了呢？
  const next = new Trie();
  // 递归调用
  next.insert(restWord);
  const key = next.key; 
  // 有可能 rest 为空插入失败，没有key值
  if (key) this.children[key] = next;
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
  // 单词第一个字母要单独处理。
  const head = word[0];
  let rest = word.slice(1);
  if (!this.key) {
      // 新节点，插
      this.key = head;
      // 新节点不会进入下方的递归插入，所以要单独设置 end 标志
      if (rest.length === 0) {
        this.wordEndHere = true;
      }
      this._insertNext(rest);
  } else if (this.key == head) {
      // push to children
      let i = 0, len = rest.length, cur = this;
      while (i < len) {
          const nextChar = rest[i];
          if (cur.children[nextChar]) {
              cur = cur.children[nextChar];
              i++;
          } else {
              // 后面就都是新的了，直接插。
              break;
          }
      }
      rest = word.slice(i+1);
      if (rest.length) {
          cur._insertNext(rest);
      } else {
          // 全插完了，设置结尾标记
          cur.wordEndHere = true;
      }
  } else {
      console.log(`Insert operation failed`);
  }
};

/**
* @return null | Trie node
* return null or the last trie node
*/
Trie.prototype._search = function(word) {
  if (!word) return false;
  let i = 0, len = word.length, cur = this;
  while (i < len && cur) {
      const char = word[i];
      const next = word[i+1];
      if (cur.key == char) {
          cur = next ? cur.children[next] : cur;
          i++;
      } else {
          break;
      }
  }
  return i == len ? cur : null;
}

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  const res = this._search(word);
  return res && res.wordEndHere;
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  const res = this._search(prefix);
  return res && Reflect.ownKeys(res.children).length >= 0;
};

const trie = new Trie();

// trie.insert("apple");
console.log(trie.search("a"));   // 返回 true