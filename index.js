const meInfo = {
    name: 'Derrick',
    age: 22
}
    
function welcome(person){
    return (welcome) => `${welcome}, ${person.name}`
}

const customMessage =  welcome(meInfo)

console.log(customMessage("Hey"))