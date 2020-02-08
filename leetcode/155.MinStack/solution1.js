/**
 * initialize your data structure here.
 * 牛逼的思想，是对辅助栈来说，只关注递减的入栈值，因为我们需要关注的是最小值
 * 那么如果早期有个5，后面所有比5大的值，都无所谓，可以随意pop
 */
var MinStack = function () {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    const len = this.min.length;
    if (len === 0 || x <= this.min[len - 1]) {
        this.min.push(x);
    }
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const len = this.min.length;
    const pop = this.stack.pop();
    if (pop !== undefined && pop === this.min[len - 1]) {
        this.min.pop();
    }
    return pop;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    const len = this.stack.length;
    return len ? this.stack[len - 1] : undefined;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    const len = this.min.length;
    return len ? this.min[len - 1] : undefined;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */