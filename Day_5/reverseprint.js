function reversePrint(head) {
var count=0;
        var a=new Array(1000);
        
        while(head !=null){
            a[count]=head.data;
            count++;
            head = head.next;
        }    
        var length = a.length;
        
        for(var i=count-1;i>=0;i--){
            console.log(a[i]);
        }
}