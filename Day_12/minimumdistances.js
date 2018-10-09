    var m = -1;
    for(var i = 0; i < a.length; i++) {
        for(var j = i+1; j < a.length; j++) {
            if(a[i] == a[j]) {
                if(m == -1){
                    m = Math.abs(i-j);
                }
                m = Math.min(m , Math.abs(i-j));
            }
        }
    }
    return m;