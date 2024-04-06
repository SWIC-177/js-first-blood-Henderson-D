const arrayName = [
  123
];

function functionName(array) {
  return (prefix) => `${prefix} ${array[0]}`;
}

const variableName = functionName(arrayName);
console.log(variableName("Prefix"));

returns //"Prefix" araryName.item