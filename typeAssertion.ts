namespace namespaceOne {
    let employee = {}
    employee.name = "john" //Error Occured because employee does not have name key in initial
}


namespace namespaceTwo {

    interface Employee {
        name: string
    }

    let employee = <Employee>{}
    employee.name = "omid"

    let employee1: Employee
    employee1.name = "saeed"

    let employee2: Employee = {}  /// in this case you must set all of values of the interface   

    let employee3: Employee = {
        name: "saeed"
    }
}


