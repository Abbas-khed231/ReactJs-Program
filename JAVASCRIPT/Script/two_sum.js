//Program for Two sums

var nums = [2,7,11,15];
var target = 9;

var solutionList = [];

for(var i=0; i<=nums.length-1; i++) {
  for(var j=i+1; j<=nums.length; j++){
    if(nums[i] + nums[j] == target){
      solutionList.push(i);
      solutionList.push(j);
    } 
  } 
}
console.log(solutionList)
