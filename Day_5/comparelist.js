function CompareLists(head1, head2) {

   var temp1 = head1;
        var temp2 = head2;
        if(head1==null && head2==null){
            return true;
        }
        else if(head1==null || head2==null){
            return false;
        }
        var f = 1;
        while(temp1.next !=null && temp2.next !=null){
            if(temp1.data != temp2.data){
               f=0;
                break;
            }
            temp1=temp1.next;
            temp2=temp2.next;
        }
        
        if(temp1.next !=null){
           f=0;
            
        }
         if(temp2.next !=null){
           f=0;             
        }
        
       if(f==1)return true;
        else return false;
}