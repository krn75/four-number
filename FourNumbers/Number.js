/**
 * Created by user on 21/01/17.
 */
function Number() {
    var arr = [];
    var arrAnswer = [];

    return {
        generateNewNumber: function(cnt){
            this.arr = [];
            for(i=0;i<cnt;i++){
                res=0;
                while (true) {
                    res= Math.round((Math.random()*9));
                    if (!this.arr.includes(res)) {break}
                }
                this.arr[i]= res;
            }

        },
        getNumberForPosition: function(position){
            return this.arr[position];
        },
        toStr: function(){
            res=""
            for(i=0;i<=this.arr.length;i++){res+=this.arr[i];}
            return res;
        },
        setAnswer: function(ans){
            arrAnswer[arrAnswer.length]=ans;
        }

    };
}
