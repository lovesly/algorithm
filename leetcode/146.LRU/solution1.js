// 感觉既要 O(1) ，又要 lru，必须维护一个链表
/**
 * @param {number} capacity
 */
// 利用现成数据结构的特性，map 会维护插入的顺序。
// 但是感觉不太好，数据结构应该自己设计才是
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const val = this.map.get(key);
    if (!val) return -1;
    // js map 会自行维护插入的顺序
    this.map.delete(key);
    this.map.set(key, val);
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // 如果已经存在，先移除
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.capacity) {
        // 移除 least used page entry
        const keys = this.map.keys();
        const _key = keys.next().value;
        this.map.delete(_key);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */