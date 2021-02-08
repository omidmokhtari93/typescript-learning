namespace One {
    // arrow function
    let sum = (x: number, y: number): number => x + y
    sum(1, 2) // will return 3
}

namespace Two {
    let show = () => console.log("Hellow")
    show()
}

namespace Three {
    class Employee {
        empName: string
        empCode: number
        constructor(empName: string, empCode: number) {
            this.empName = empName
            this.empCode = empCode
        }

        getEmp = (name: string, code?: number): string => {
            return name + ' ' + code
        }
    }
    //the following code will show an error becuase when you parameterized constructor in class you must pass all required parameters
    let emp = new Employee("omid");
    let det = emp.getEmp("omid")
}