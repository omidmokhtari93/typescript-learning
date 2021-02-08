namespace One {
    /// in this case , no matter what pass to function or what return from function
    function display() {
        console.log("Hellow");
    }
    display();
}


namespace Two {
    // in this case your return type must be a number
    function sum(x: number, y: number): number {
        return x + y
    }
    sum(1) //Error compile , you must pass all parameters to function
    sum(1, 2)
}

namespace Three {
    // in this case the Y keyword is a optional parameter and when you call this function the y paramter not need to pass to the function
    function sum(x: number, y?: string): string {
        return x + y
    }
    sum(1)
    sum(1, "omid")
}

namespace Four {
    // in this case we define default parameters
    function sum(x: number = 5, y: number): number {
        return x + y
    }
    sum(undefined, 4) // will return 9
    sum(1, 2) // will return 3
}




