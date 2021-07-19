// @param {Node} head
 function display(head){
    //code here
    let s = "";
    while(head){
      s += head.data;
      s += " ";
      head = head.next;
    }
    console.log(s);
  }
}
