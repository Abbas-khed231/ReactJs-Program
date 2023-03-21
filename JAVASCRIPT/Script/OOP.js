class User {
    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getDetails(){
        return(`The name of the user is ${this.name
        }`);
    }
}

let user1 = new User('Farhan',18,'Mumbai');
let user2 = new User('Vedang',17,'Nashik');
console.log(user1.getDetails());