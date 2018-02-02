//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
class Queue {
    constructor() {
      this._storage = {};
      this._start = 0;
      this._end = 0;
    }
  
  
    enqueue (value) {
      this._storage[this._end++] = value;
    }
  
    dequeue () {
      // This does some unnecessary work sometimes. Can you spot why?
      var result = this._storage[this._start];
      delete this._storage[this._start];
  
      this.size() && this._start++;
  
      return result;
    }
  
    size () {
      return this._end - this._start;
    }
  
    peek () {
      return this._storage[this._start];
    }
  }
  
  class Tree {
    constructor (x) {
      this.value = x;
      this.left = null;
      this.right = null;
    }
  }
  const largestValuesInTreeRows = (t) => {
    let results = [];
    let level = 0;
    let q = new Queue();
    q.enqueue({ 'node': t, level});
    while ( q.size() !== 0 ) {
      let dequeued = q.dequeue();
      let currentNode = dequeued.node;
      let level = dequeued.level;
      if ( currentNode ) {
        if ( results[level] ) {
          results[level] = Math.max(results[level], currentNode.value);
        } else {
          results[level] = currentNode.value;
        }
        level++;
        q.enqueue({ 'node': currentNode.left, level});
        q.enqueue({ 'node': currentNode.right, level});
      }  
      
    }
    return results;
  };