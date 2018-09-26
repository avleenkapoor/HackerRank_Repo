function insertNodeAtTail(head, data) {
  var node = new SinglyLinkedListNode(data);
        node.next = null;
        if(head == null){
        return node;
        }else{
            var current = head;
            while(current.next !=null){
                current = current.next;
            }
            current.next=node;
            return head;
        }

}