//employeeformview
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import { getEmployees, addEmployee, updateEmployee } from '../data/dataEmployee';

const EmployeeFormView = () => {
  const { id } = useParams();  // Obtener el ID de la URL
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    if (id) {
      // Buscar el empleado por ID cuando se edita
      const employee = getEmployees().find(emp => emp.id === parseInt(id));
      if (employee) {
        setEmployeeData(employee);
      }
    }
  }, [id]);

  const handleSaveUser = (employee) => {
    if (id) {
      updateEmployee(employee);  // Actualizar el empleado existente
    } else {
      employee.id = Date.now();  // Generar un ID único si es un nuevo empleado
      addEmployee(employee);  // Agregar nuevo empleado
    }
    navigate('/');  // Redirigir al listado de empleados
  };

  return (
    <div>
      <h1>{id ? 'Editar Empleado' : 'Nuevo Empleado'}</h1>
      <EmployeeForm 
        initialData={employeeData}
        onSaveUser={handleSaveUser} 
      />
    </div>
  );
};

export default EmployeeFormView;
