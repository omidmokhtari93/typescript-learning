let id = 0;
function createUser(name: string, position: string) {
    return {
        id: id++,
        name,
        position,
        createdAt: new Date()
    };
}

type User = ReturnType<typeof createUser>;
//// this will retrun type
// User = {
//     id: number;
//     name: string;
//     position: string;
//     createdAt: Date;
// }