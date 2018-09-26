function deleteNode(head, position) {
if (position == 0) {
    return head.next;
  }
        var count=0;
    var temp = head;
        var currentNode = head;
    var prevNode = head;
    while(((temp).next)!=null)
    {
        count++;
        if(count==position)
        {
        prevNode=temp;
        currentNode=temp.next;}
        temp=temp.next;
    }
    prevNode.next=currentNode.next;    
  return head;

}