const todayDate = () => {
  const currentDate = new Date();
   
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  
  return(`${year}-${month}-${day}`);
  }
  
  const nameAge = (name, age) => {
    const message = `Hello, ${name}! You are ${age}`
    return(message)
  }
  
  const customMessage = (greeting, date) => {
      const welcomeMessage = `${greeting}` + ` and today is ${date}`
      return welcomeMessage
  }
  
  console.log(customMessage(nameAge('Derrick', 22), todayDate()))