var arr = [2,4,5,5,4,6];

var result = [];

for(const value of arr){
    if(!result.includes(value)){
        result.push(value)
    } else {
        const value_index = result.indexOf(value);
        result.splice(value_index, 1);
    }
}
console.log(result);