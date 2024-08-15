import React from 'react';
import EmployeeRow from './EmployeeRow';
import '../styles/EmployeeList.css'

const EmployeeList = ({ employees, onRemoveUser, onEditUser }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Correo</th>
          <th>Cédula</th>
          <th>Número INSS</th>
          <th>Fecha de Nacimiento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <EmployeeRow 
            key={employee.id} 
            employee={employee} 
            onRemoveUser={onRemoveUser} 
            onEditUser={onEditUser} 
          />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
