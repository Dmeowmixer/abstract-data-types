module.exports = LinkedList;
var Node = require('./Node');
/**
 * A collection of Node objects.
 * @property {Node} head – The first Node object, defaults to `null`.
 * @property {Number} length - The length of the LinkedList, defaults to 0.
 */
function LinkedList () {
  // Wat is head?
  this.head = null;
  this.tail = null;
}

/**
 * Appends the Node object to the end of the linked list.
 * @param  {[type]} node [description]
 * @throws {TypeError} – Should only accept other Node objects.
 * @return {[type]}      [description]
 */


// so if  node isn't the tail
LinkedList.prototype.add = function (node) {
  if (node instanceof Node){
    if(this.head === null && this.tail === null){
      this.head = node;
      this.tail = node;
    }

    this.tail.next = node;
    this.tail = node;
  } 
  else {
    throw new TypeError;
  }
};

/**
 * Returns the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 * @return {Node}       The Node object.
 */
LinkedList.prototype.get = function (index) {
  if (index === 0) {
    return this.head;
  }
  else {
    var counter = 1;
    for(var i = 0; i < index; i++){
      counter++;
      if()
    }
  }
};

/**
 * Removes the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 */
LinkedList.prototype.remove = function (index) {
};
