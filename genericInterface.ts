////////////////////////////////////////////////////////////////////////////////////////////
namespace One {
    interface IProcessor<T> {  //// T is type that you assign after implements this interface /// for example : string
        result: T;
        process(a: T, b: T): T;
    }

    class Person implements IProcessor<string>{
        result: string
        constructor(result: string) {
            this.result = result
        }
        process(a: string, b: string) {
            return a + b + this.result
        }
    }

    let per = new Person("omid")
    console.log(per.process("Hello", "to"))
}
////////////////////////////////////////////////////////////////////////////////////////////
///Generic Interface as Type
namespace Two {
    interface KeyPair<T, U> {
        key: T
        value: U
    }

    let kp: KeyPair<number, string> = {
        key: 123,
        value: "omid"
    }
    console.log(kp.key, kp.value);

}
////////////////////////////////////////////////////////////////////////////////////////////
///Generic Interface as Function Type
namespace Three {
    interface KeyValueProcessor<T, U> {
        (key: T, value: U): void
    }

    function process<T, U>(key: T, value: U) {
        console.log(key, value)
    }

    let check: KeyValueProcessor<string, number> = process
    check("omid", 123)
}

////////////////////////////////////////////////////////////////////////////////////////////
/////Generic Interface as Function Type
namespace Four {
    interface Person<T, U> {
        name: T
        code: U
    }

    class Employee implements Person<string, number>{
        name: string
        code: number
        constructor(name: string, code: number) {
            this.name = name
            this.code = code
        }
        render<T, U>(name: T, code: U) {
            console.log(name, code);
        }
    }

    let emp = new Employee("omid", 2438)
    emp.render<string, number>("omid", 44)
}