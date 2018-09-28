function reverse(head) {
var current = head;
       var temp = null;
        while(current!=null){
            temp = current.prev;   
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
        return temp.prev;
}