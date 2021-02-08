namespace One {
    function Greet(name: string, ...names: string[]) {
        return name + names.join(" ")
    }

    Greet("Mokhtari", "saeed", "vahid") // returns Mokhtari saeed vahid
}