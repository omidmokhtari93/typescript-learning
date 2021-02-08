//////////////////////////////////////////////////////////////////////////////////////////////
namespace One {
    class Person {
        static code: number = 123
        name: string = "123"
        num: number
        static claculate(...numbers: number[]): number {
            console.log(numbers)
            return Person.code * 20
        }
    }

    let code = Person.code; ////Static memebr access whit class name only
    Person.claculate(1, 2, 44)
}