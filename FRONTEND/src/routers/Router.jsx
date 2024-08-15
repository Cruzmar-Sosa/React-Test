import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeListView from '../views/EmployeeListView';
import EmployeeFormView from '../views/EmployeeFormView';
import ApiView from '../views/ApiView'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeListView />} />
        <Route path="/nuevo" element={<EmployeeFormView />} />
        <Route path="/:id/editar" element={<EmployeeFormView />} />
        <Route path="/Apiview" element= {< ApiView />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
