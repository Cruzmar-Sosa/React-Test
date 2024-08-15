import React, { useState, useEffect } from 'react';
import EmployeeList from '../components/EmployeeList';
import { useNavigate } from 'react-router-dom';
import { getEmployees, removeEmployee } from '../data/dataEmployee';
import '../styles/EmployeeListView.css'



const EmployeeListView = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  const handleAddUser = () => {
    navigate('/nuevo');
  };

  const handleRemoveUser = (id) => {
    const confirmed = window.confirm('¿Está seguro de que desea eliminar este empleado?');
    if (confirmed) {
      removeEmployee(id);
      setEmployees(getEmployees());
    }
  };

  const handleEditUser = (id) => {
    navigate(`/${id}/editar`);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.cedula.includes(searchQuery)
  );

  return (
    <div>
      <h1>Lista de Empleados</h1>
      <input
        type="text"
        placeholder="Buscar por nombre o cédula"
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: '10px' }}
      />
      <EmployeeList 
        employees={filteredEmployees} 
        onRemoveUser={handleRemoveUser} 
        onEditUser={handleEditUser} 
      />
      <button className="add" onClick={handleAddUser}>Añadir Empleado</button>
      <button className='api' onClick = { () => navigate("/ApiView")}>Api</button>
    </div>
  );
};

export default EmployeeListView;
