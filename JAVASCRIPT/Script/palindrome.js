var arr = [3,1,3];

var isPalindrome = true;
var j = 1;
for(var i=0; i<=arr.length-1; i++){
    if (arr[i] != arr[arr.length - j]){
        isPalindrome = false;
        break;
    }
    j+=1;
}

console.log(isPalindrome)