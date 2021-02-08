////////////////////////////////////////////////////////////////////////////
//Generics
namespace One {
    function getArray<T>(items: T[]): T[] {
        return new Array<T>().concat(items)
    }

    let nums = getArray<number>([1, 3, 5])
}
////////////////////////////////////////////////////////////////////////////////
///Multiple Type Variables
////The type variable T is also used to specify the type of the arguments and the return value
namespace Two {
    function getArray<T, Z>(x: T, y: Z): void {
        console.log(x, y)
    }

    getArray<number, number>(1, 2)
}

//////////////////////////////////////////////////////////////////////////////
namespace Three {
    function getSomthing<T>(x: T, y: string): void {
        console.log(x, y)
    }

    getSomthing<string>("omid", "saeed");
}
/////////////////////////////////////////////////////////////////////////////
namespace Four {
    class Person {
        firstName: string
        lastName: string
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName
            this.lastName = lastName
        }
    }

    function disp<T extends Person>(per: T): Person {
        //console.log(per.firstName + ' ' + per.lastName)
        return {
            firstName: per.firstName,
            lastName: per.lastName
        }
    }

    let name = disp(new Person("omid", "mokhtari"))
    console.log(name)
}