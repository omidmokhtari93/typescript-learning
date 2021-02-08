/////////////////////////////////////////////////////////////////////////////////////////
////Public
namespace One {
    class Employee {
        public name: string
        code: number
    }

    let emp = new Employee()
    emp.name
    emp.code
}
/////////////////////////////////////////////////////////////////////////////////////////
///Private
namespace Two {
    class Person {
        private name: string // priave only available inside this class
        code: number
    }

    class Employee extends Person {
        empCode: number
    }

    let per = new Person()
    per.code
    per.name ///// this does not available in object of class 

    let emp = new Employee()
    emp.code
    emp.empCode
    emp.name ///// and this field does not available in inhertiance
}
/////////////////////////////////////////////////////////////////////////////////////////////
///Protected
namespace Three {
    class Person {
        protected name: string
        private code: number

        show() {
            console.log(this.name)
            console.log(this.code)
        }
    }


    class Employee extends Person {
        empCode: number
        code = "" //// private field only access inside parent class

        show() {
            console.log("");
            this.name = ""
        }
    }


    let per = new Person()
    per.show()
    per.name //// not available
    per.code ///// not available


    let emp = new Employee()
    emp.empCode
    emp.name
    emp.code
}