
enum Person1 {
    name,
    code,
    age
}


enum Person {
    name = "name",
    code = "code",
    age = "age"
}


let per = Person.age; /// will return age as string value
let per1 = Person1.age; /// will return index of age that is 2
console.log(per, per1)