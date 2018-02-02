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
  const traverseTree = (t) => {
    let results = [];
    let q = new Queue();
    q.enqueue(t);
    while ( q.size() !== 0 ) {
      let currentNode = q.dequeue();
      if ( currentNode ) {
        results.push(currentNode.value);
        q.enqueue(currentNode.left);
        q.enqueue(currentNode.right);
      }  
      
    }
    return results;
  };