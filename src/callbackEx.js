

function getUsers(cbFunc){
    let users;

    setTimeout(()=>cbFunc([{ username: 'john', email: 'john@test.com' },
                { username: 'jane', email: 'jane@test.com' }]),1000);
}
function findUser(userName){
    const user= getUsers((users)=> { 
        const user=users.find(user=>user.username===userName);
        console.log(user);
    })
}

findUser("john");