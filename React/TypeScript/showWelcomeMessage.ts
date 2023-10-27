type User = {
    name: string,
    email: string,
    adress: {
        city: string,
        state?: string,
    }

}

function showWelcomeMessage(user: User){
    return `Welcome ${user.name}, your email is ${user.email} your city ${user.adress.city} and your state is ${user.adress.state}`;
}

console.log('Tested Success')

console.log(showWelcomeMessage({
    name: 'Jose',
    email: 'aaa@gmail.com',
    adress: {
        city: 'São Paulo',
        state: 'SP'
    }
}));

// Cidade -- UF