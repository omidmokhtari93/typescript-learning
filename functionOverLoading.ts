namespace One {
    function add(x: number, y: number): number;  //this case is declaration

    function add(x: string, y: string): string;

    function add(x: any, y: any): any { //// this case is implementation
        return x + y
    };


    add("omid", "mokhtari") //will return omid mokhtari
    add(5, 10) // will return 15

    add(true, false) // Error in Compile because in function declaration we does not declare boolian type
}


namespace Two {
    //Function overloading with different number of parameters and types with same name is not supported.
    function display(x: number, y: number): void {
        console.log(x + y);
    }

    function display(x: number): void {
        console.log(x);
    }
}