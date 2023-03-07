var num_list = [2,3,4,5,1];

var num = num_list[0] //2

for(var i=1; i<=num_list.length-1; i++){
    if(num_list[i] < num){
        num = num_list[i]  
    }
}

console.log(num);