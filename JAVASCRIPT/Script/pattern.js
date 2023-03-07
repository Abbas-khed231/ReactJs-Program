var num = 3;
var str = "";
for (var i = 1; i <= num; i++) {
  for (var j = 0; j < i; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);