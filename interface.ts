//Interface is a structure that defines the contract in your application.
//It defines the syntax for classes to follow. 
//Classes that are derived from an interface must follow the structure provided by their interface.
//This is also known as "duck typing" or "structural subtyping"

interface Employee {
    empCode: number;
    empName: string;
    getSalary: (number) => number /// the parameter type set to any by default
    getManagerName(empCode: number): string //parameter only accept number type
}

let emp: Employee = {
    empCode: 456,
    empName: "omid",
    getManagerName() { return "omid" },
    getSalary: () => 1500,
    newKey: "something" // you cannot define new key in emp because it follow employee interface
}

////////////////////////////////////////////////////////////////////////////////////////////
//TypeScript interface is also used to define a type of a function. This ensures the function signature.
interface KeyValueProcessor {
    (key: number, value: string): void
}

function addKeyValue(key: number, value: string): void {
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

let kvp: KeyValueProcessor = addKeyValue

///////////////////////////////////////////////////////////////////////////////////////////
function delete1(key: number): void {
    console.log('Key deleted.')
}

let kvp1: KeyValueProcessor = delete1; //Compiler Error

//////////////////////////////////////////////////////////////////////////////////////////////
interface NumList {
    [index: number]: number
}

let num: NumList = [1, 2, 3]
console.log(num[1]); // this will show 2 becase index of 2 in array is 1

///////////////////////////////////////////////////////////////////////////////////////////////
/// Optional Property in interface
interface IEmployee {
    empCode: number
    empName: string
    empDept?: string //// this does not need to assign to a value if does not required 
}

let empObject1: IEmployee = {
    empCode: 123,
    empName: 'omid'
}

let empObject2: IEmployee = {
    empCode: 123,
    empName: 'omid',
    empDept: 'IT'
}
////////////////////////////////////////////////////////////////////////////////////////////////
/// Readonly properties in interface
interface Citizen {
    name: string
    readonly SSN: number
}

let person: Citizen = {
    name: 'omid',
    SSN: 65498798
}

person.name = "saeed" /// this is ok
person.SSN = 234234 //// this does not apply because it is readonly property


let per: Citizen;
per.SSN = 123123; //// and this will not work ---- only can assign value to SSN in variable initialization
//////////////////////////////////////////////////////////////////////////////////////////////////
////Extending Interfaces
namespace One {
    interface IPerson {
        name: string
        nationalId: number
    }

    interface IEmployee extends IPerson {
        empCode: string
        salary: string
    }

    let emp: IEmployee = {
        name: "omid",
        nationalId: 123,
        empCode: "2435345",
        salary: '124000$'
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
///Implementing an Interface
namespace Two {

    interface IEmployee {
        empCode: number
        name: string
        getSalary: (empCode: number) => number
    }

    class Employee implements IEmployee {
        empCode = 123
        name = "omid"

        getSalary = (code: number) => {
            return 1240000
        }
    }
    let emp = new Employee()
    emp.empCode = 123;
}