namespace One {
    class Person {
        name: string
        code: number
    }

    class Employee {
        name: string
        id: number
    }

    function reducer<T extends Person, U extends Employee>(person: T, employee: U): void {
        console.log(person, employee)
    }


    reducer(new Person(), new Employee())
}