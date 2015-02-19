var LinkedList = require('./LinkedList');
var Node = require('./Node');
module.exports = Stack;

function Stack() {
  this.length = 0;
}
// TODO: Extend LinkedList
  // this.length = 0;
  Stack.prototype = Object.create(LinkedList.prototype, {
    constructor : {
      value : LinkedList
      // length : 0
    }
  });
/**
 * Pushes the value onto the top of the stack
 * @param  value The value to add to the stack
 */
Stack.prototype.push = function (value) {
  this.length++;
  value = this.head;
};

/**
 * Pops the value on top of the stack
 * @throws {Error} – Thrown when the stack is empty
 * @return The value on top of the stack
 */
Stack.prototype.pop = function () {
  if (Error){
    throw new Error();
  }
  
};

/**
 * Peek at the value on top of the stack
 * @throws {Error} – Thrown when the stack is empty
 * @return The value on top of the stack
 */
Stack.prototype.peek = function () {

};