var password_length = 6;
var password = "";
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+=ABCDEFGIJKLMNOPQRSTUVWXYZ";
console.log(chars.length);

for(i=0; i<=password_length;i++){
    var random_num = Math.floor(Math.random() * chars.length); 
    password += chars.substring(random_num, random_num+1);
}
console.log(password);