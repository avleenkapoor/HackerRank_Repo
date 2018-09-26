function insertNodeAtHead(head, data) {
  var node = new SinglyLinkedListNode(data);
        node.next = null;
        if(head == null){
        return node;
        }else{
          node.next=head;
           
            return node;
        }
