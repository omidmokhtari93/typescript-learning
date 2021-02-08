//////////////////////////////////////////////////////////////////////////////////
///Readonly class
namespace One {
    class Employee {
        readonly name: string
        code: number
        constructor(name: string, code: number) {
            this.name = name
            this.code = code
        }
    }

    let emp = new Employee("omid", 123)
    emp.code = 123
    emp.name = "Saeed" ///// you cannot change this field after initialization
}
//////////////////////////////////////////////////////////////////////////////////
namespace Two {
    interface IEmployee {
        readonly name: string
        code: number
    }

    let emp: IEmployee = {
        code: 213,
        name: "omid"
    }

    emp.code = 345
    emp.name = "Saaedd" /// just declare it in initialization after that does not access
}
/////////////////////////////////////////////////////////////////////////////////
namespace Three {

    interface IPerson {
        name: string
        code: number
    }

    let per: Readonly<IPerson> = {
        code: 123,
        name: '123'
    }

    per.code = 123
    per.name = "123"

}