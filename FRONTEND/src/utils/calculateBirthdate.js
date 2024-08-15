const calculateBirthdate = cedula => {
  const day = cedula.slice(4, 6);
  const month = cedula.slice(6, 8);
  const shortYear = cedula.slice(8, 10);
  
  //dias
  const currentDay = new Date().getDate();
  const birthDay = currentDay - day
  
  //mes
  const currentMonth = new Date().getMonth();
  const birthMonth = (currentMonth + 1 ) - month

  //aÃ±o
  let currentYear = new Date().getFullYear();
  currentYear = currentYear % 100
  let birthYear = currentYear - shortYear



  if (birthYear >= 0 && birthMonth >= 0 && birthDay >= 0) {
    birthYear = 2000 + parseInt(shortYear, 10);
  } else {
    birthYear = 1900 + parseInt(shortYear, 10);
  }

  // Resultado: Fecha de nacimiento completa
  return `${day}/${month}/${birthYear}`;
};

export default calculateBirthdate