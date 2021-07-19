/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/


/**
 * @param {Node} head
*/

class Solution {
  display(head){
    //code here
    let s = "";
    while(head){
      s+=head.data;
      s+=" ";
      head = head.next;
    }
    console.log(s);
  }
}
