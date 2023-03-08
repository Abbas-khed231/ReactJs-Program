var Employee = [
    {
        Name: "Abbas",
        Designation: "Front-End Developer",
        Salary: "50000",
        Performance: 10
    }
]

function calculateIncrementOfEmplyee(Employee) {
    for(var E of Employee){
        var Current_Increment = E.Performance / 2;
        var Incremented_Salary = E.Salary * Current_Increment / 100;
        console.log(E.Name + "  has incresed by " + Current_Increment + "% into his " + Incremented_Salary);
    }
    
}

calculateIncrementOfEmplyee(Employee)