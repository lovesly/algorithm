// 我靠，牛逼啊，这个利用到了两个方向的递增特性

var searchMatrix = function(matrix, target) {
    let row=matrix.length-1;
    let col=0;
    while(row>=0&&col<matrix[0].length){
        if(matrix[row][col]===target){
            return true;
        }else if(matrix[row][col]>target){
            row--;
        }else{
            col++;
        }
    }
    return false;
};