const meInfo = {
    name: 'Derrick',
    age: 22
}
    
function welcome(person){
    return (greet) => `${greet}, ${person.name}`
}

const customMessage =  welcome(meInfo)

console.log(customMessage("Hey"))