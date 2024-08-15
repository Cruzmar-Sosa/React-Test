import React from 'react';

const EmployeeRow = ({ employee, onRemoveUser, onEditUser }) => {
  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.email}</td>
      <td>{employee.cedula}</td>
      <td>{employee.inss}</td>
      <td>{employee.birthdate}</td>
      <td>
        <button className='edit' onClick={() => onEditUser(employee.id)}>Editar</button>
        <button className='delete' onClick={() => onRemoveUser(employee.id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default EmployeeRow;
