import React, { useState, useEffect } from 'react';
import calculateBirthdate from '../utils/calculateBirthdate';
import { checkUniqueFields } from '../data/dataEmployee';
import '../styles/EmployeeForm.css';
import formatCedula from '../utils/formatCedula';

const EmployeeForm = ({ initialData = {}, onSaveUser }) => {
  const defaultData = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    cedula: '',
    inss: '',
    birthdate: '',
  };

  const employee = { ...defaultData, ...initialData };

  const [firstName, setFirstName] = useState(employee.firstName);
  const [lastName, setLastName] = useState(employee.lastName);
  const [email, setEmail] = useState(employee.email);
  const [cedula, setCedula] = useState(employee.cedula);
  const [inss, setInss] = useState(employee.inss);
  const [isCedulaValid, setIsCedulaValid] = useState(true); // Nuevo estado para la validez de la cédula

  const handleCedulaChange = (e) => {
    const { value } = e.target;
    const { formatted, isValid } = formatCedula(value);  // Ahora recibimos ambos valores
    setCedula(formatted);
    setIsCedulaValid(isValid);  // Guardamos si la cédula es válida
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isCedulaValid) {
      alert('Por favor, corregir el formato de la cédula.');
      return;
    }

    if (!checkUniqueFields(email, cedula, inss, employee.id)) {
      alert('El correo, cédula o INSS ya están en uso.');
      return;
    }

    const birthdate = calculateBirthdate(cedula);

    onSaveUser({
      id: employee.id || Date.now(),
      firstName,
      lastName,
      email,
      cedula,
      inss,
      birthdate,
    });
  };

  useEffect(() => {
    setFirstName(employee.firstName);
    setLastName(employee.lastName);
    setEmail(employee.email);
    setCedula(employee.cedula);
    setInss(employee.inss);
  }, [employee.cedula, employee.email, employee.firstName, employee.inss, employee.lastName, initialData]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombres:</label>
        <input
          required={true}
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Apellidos:</label>
        <input
          required={true}
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Correo:</label>
        <input
          required={true}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Cédula:</label>
        <input
          required={true}
          type="text"
          maxLength={16}
          minLength={16}
          placeholder='XXX-DDMMYY-XXXXY'
          value={cedula}
          onChange={handleCedulaChange}
        />
        <span id='datosIncongruentesID' style={{ display: 'none', color: 'red' }}>
          Datos incongruentes: Día o Mes fuera de rango
        </span>
      </div>
      <div>
        <label>INSS:</label>
        <input
          required={true}
          type="text"
          maxLength={12}
          minLength={8}
          value={inss}
          onChange={(e) => setInss(e.target.value)}
        />
      </div>
      <button type="submit" className="bt-form">Guardar</button>
    </form>
  );
};

export default EmployeeForm;
