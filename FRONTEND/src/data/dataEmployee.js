// Ejemplo de datos iniciales (puedes comenzar con un array vacío)
const employeesData = [
    {
      id: 1,
      firstName: 'Juan',
      lastName: 'Perez',
      email: 'juan.perez@example.com',
      cedula: '281-181002-1000S',
      inss: '123456789',
      birthdate: '18/10/2002',
    },
    {
      id: 2,
      firstName: 'Roger',
      lastName: 'Guido',
      email: 'roger.guido@tesla.com',
      cedula: '281-150203-1000S',
      inss: '987654321',
      birthdate: '18/10/2003',
    },
  ];

  /* const [employees, setEmployees] = useState(employees) 
    setUser([.... employessData, setEmployees])*/
  
  let employees = [...employeesData];
  
  export const getEmployees = () => employees;
  
  export const addEmployee = (newEmployee) => {
    employees.push(newEmployee);
  };
  
  export const updateEmployee = (updatedEmployee) => {
    employees = employees.map((emp) =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
  };
  
  export const removeEmployee = (id) => {
    employees = employees.filter((emp) => emp.id !== id);
  };
  
  export const checkUniqueFields = (email, cedula, inss, id = null) => {
    return !employees.some(emp => 
      (emp.email === email || emp.cedula === cedula || emp.inss === inss) && emp.id !== id
    );
  };
  