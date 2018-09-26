function insertNodeAtPosition(head, data, position) {
{
    var temp;
     var p;
     var node = new SinglyLinkedListNode(data);
      if (head == null) {
        return node;
    }
    else {
         temp = head;
         p = 0;
    }
        if (position == 0) {
           node.next = head;
            return node;
        }

        while (temp != null) {
            if (p == position - 1) {
                node.next = temp.next;
                temp.next = node;
            } else {
                temp = temp. next;
            }
            p = p + 1;
        }
        return head; 
    }
}