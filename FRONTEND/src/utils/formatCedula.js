const formatCedula = (value) => {
  const cleaned = value.replace(/[^0-9A-Z]/g, ''); // Limpiar la entrada de caracteres no permitidos
  const part1 = cleaned.slice(0, 3);
  const part2 = cleaned.slice(3, 9);
  const part3 = cleaned.slice(9, 13);
  const part4 = cleaned.slice(13, 14);

  // Validar día y mes dentro de part2
  const day = part2.slice(0, 2);
  const month = part2.slice(2, 4);

  let isValid = true;
  let errorMessage = '';

  // Validación del día
  if (day && (parseInt(day, 10) < 1 || parseInt(day, 10) > 31)) {
    isValid = false;
    errorMessage = 'Día fuera de rango (01-31)';
  }

  // Validación del mes
  if (month && (parseInt(month, 10) < 1 || parseInt(month, 10) > 12)) {
    isValid = false;
    errorMessage = 'Mes fuera de rango (01-12)';
  }

  const alerta = document.getElementById('datosIncongruentesID');
  if (!isValid) {
    alerta.style.display = 'block';
    alerta.textContent = errorMessage;
  } else {
    alerta.style.display = 'none';
  }

  // Formatear la cédula
  let formatted = part1;
  if (part2) {
    formatted += `-${part2}`;
  }
  if (part3) {
    formatted += `-${part3}`;
  }
  if (part4) {
    formatted += `${part4}`;
  }

  return { formatted, isValid };  // Devolver tanto el formato como la validez
};

export default formatCedula;
