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
  this.length = 0;
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
  this.length++;
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
  else{
    var currentindex = this.head; 
    var i = 0;
    while(i < index){
     currentindex = currentindex.next;
     i++;
    }
    return currentindex;
  }

};

/**
 * index =0 head
 * Removes the n-th Node at the provided index.
 * @param  {Number} index – The index of the Node object.
 */
LinkedList.prototype.remove = function (index) {
  if(index === 0){
    this.head = this.head.next;
  }else{
    var current = this.head;
    var previous;
    var i = 0;
    while (i < index){
      previous = current;
      current = current.next;
      i++;
    }
    previous.next = current.next;   
  }
  this.length--;
};
