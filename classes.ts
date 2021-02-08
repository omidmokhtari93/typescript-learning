/////////////////////////////////////////////////////////////////////////////////////////////
///Inheritance

class Person {
    name: string
    id: number
    constructor(name: string, id: number) {
        this.name = name
    }
}

//The constructor of the Employee class initializes its own members as well as the parent class's properties
// using a special keyword 'super'. The super keyword is used to call the parent constructor and passes the property values.
class Employee extends Person {
    empCode: number

    constructor(empCode: number, name: string, id: number) {
        super(name, id)
    }

    displayName(): void {
        console.log("test")
    }
}

let emp = new Employee(154, "omid", 5)

/////////////////////////////////////////////////////////////////////////////////////////////
///////Class Implements Interface
namespace One {
    interface IPerson {
        name: string
        display(name: string): void
    }

    interface IEmlpoyee {
        empCode: number
    }

    class Employee implements IPerson, IEmlpoyee {
        name = "omid"
        empCode = 24387
        constructor(empCode: number, name: string) {
            this.empCode = empCode
            this.name = name
        }
        display(name: string): void {
            console.log("hi")
        }
    }

    let emp = new Employee(123, "omid")
    emp.empCode
}
///////////////////////////////////////////////////////////////////////////////////////////////
///Interface extends Class
namespace Two {
    class Person {
        name: string
    }

    interface Employee extends Person {
        empCode: number
    }

    let emp: Employee = {
        empCode: 123,
        name: 'omid'
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////
///Method Overriding
namespace Three {
    class Car {
        name: string

        constructor(name: string) {
            this.name = name
        }

        run(speed: number = 0) {
            console.log(this.name + " is moving at " + speed)
        }
    }

    class Mercedes extends Car {
        constructor(name: string) {
            super(name)
        }

        run(speed = 100) {
            console.log("A Benz Started")
            super.run(speed)
        }
    }

    let benz = new Mercedes("Mercedes")
    benz.run(150)
}
/////////////////////////////////////////////////////////////////////////////////////////////////
////Abstract Class
namespace Four {
    abstract class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        display(): void {
            console.log(this.name);
        }

        abstract find(string): Person;
    }


    class Employee extends Person {
        name: ""
        empCode: string
        constructor(name: string, empCode: string) {
            super(name)
            this.empCode = empCode
        }

        display() {
            console.log("")
        }

        find(name: string): Person {
            return new Employee("omid", "100")
        }
    }

    let emp = new Employee("omid", "233")
    emp.find("pers")
}