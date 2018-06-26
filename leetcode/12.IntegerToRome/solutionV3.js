/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var res="";
    var roman=['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    var value=[1000, 500, 100, 50, 10, 5, 1];

    for (var n=0;n<7;n+=2) {
        var x=Math.floor(num/value[n]);
        if (x<4) {
            for (var i=1;i<=x;i++) {
                res+=roman[n];
            }
        }
        else if (x==4) {
            res=res+roman[n]+roman[n-1];
        }
        else if (x>4&&x<9) {
            res+=roman[n-1];
            for (var i = 6; i <= x; ++i) {
                res += roman[n];
            }
        }
        else if(x==9) {
            res=res+roman[n]+roman[n-2];
        }
        num%=value[n];
    }
    return res;
};