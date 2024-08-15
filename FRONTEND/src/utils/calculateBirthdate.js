const calculateBirthdate = (cedula) => {
  const day = cedula.slice(4, 6);
  const month = cedula.slice(6, 8);
  const shortYear = cedula.slice(8, 10);

  const currentYear = new Date().getFullYear();
  const fullYear = currentYear % 100;
  
  // Determinar el siglo
  let birthYear = parseInt(shortYear, 10);
  if (birthYear > fullYear) {
      birthYear += 1900;
  } else {
      birthYear += 2000;
  }

  // Fecha de nacimiento completa
  return `${day}/${month}/${birthYear}`;
};
export default calculateBirthdate;