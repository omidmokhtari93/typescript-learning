namespace One {
    class Person<T, U> {
        key: T
        value: U
        constructor(key: T, value: U) {
            this.key = key
            this.value = value
        }

        show(key: T, value: U) {
            console.log(key, value)
        }
    }

    let per = new Person<number, string>(12, "omid")
    console.log(per.show(123, "omid"))
}


namespace Two {
    interface Person<T, U> {
        show(key: T, value: U): void
    }

    class Employee<T, U> implements Person<T, U>{
        show(key: T, value: U) {
            console.log(key, value);
        }
    }

    let emp: Person<string, number> = new Employee()
    console.log(emp.show("omid", 123))
}