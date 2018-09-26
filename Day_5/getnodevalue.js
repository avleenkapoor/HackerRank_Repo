function getNode(head, positionFromTail) {
        var temp=head;
        var count=0,p;
        while(temp!=null)
        {
            count++;
            temp=temp.next;
        }
        temp=head;
        p=0;
         while(temp!=null)
        {
            p++;
             if(p==(count-positionFromTail))
             {
                 return temp.data;
             }
            temp=temp.next;
        }
        return 0;

}