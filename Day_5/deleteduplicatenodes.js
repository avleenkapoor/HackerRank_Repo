function removeDuplicates(head) {
   var current = head;
        var temp;
        if (head == null)     
            return null; 
        while(current.next!=null){
            if(current.data == current.next.data){
                temp = current.next.next;
                current.next = null;
                current.next = temp;
            }else{
                current = current.next;
            }
        }
        return head;
    }

