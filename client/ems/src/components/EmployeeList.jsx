import React, { useEffect, useState } from 'react';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../services/api';


const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', salary: '' , date: '', password: ''});
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const response = await getEmployees();
    setEmployees(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedForm = { ...form, date: Number(form.date)};
    if (editId) {
      await updateEmployee(editId, updatedForm);
    } else {
      await createEmployee(form);
    }
    setForm({ firstName: '', lastName: '', email: '', salary: '', date: '' , password: '' });
    setEditId(null);
    loadEmployees();
  };

  const handleEdit = (employee) => {
    setForm({...employee, date: employee.date.toString()});
    setEditId(employee.id);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    loadEmployees();
  };


  return (
    <div>
      <h1>Employee Management System</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Salary"
          value={form.salary}
          onChange={(e) => setForm({ ...form, salary: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">{editId ? 'Update' : 'Add'} Employee</button> &nbsp;
      </form>


      <div>
        {employees.map((employee) => (
          <table key={employee.id}>
            <tr>
              <th>firstName</th>
              <th>lastname</th>
              <th>email</th>
              <th>salary</th>
              <th>date</th>
              <th>password</th>
            </tr>
            <tr>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.salary}</td>
              <td>{employee.date}</td>
              <td>{employee.password}</td>
            </tr>
          <button onClick={() => handleEdit(employee)}>Edit</button> &nbsp;
          <button onClick={() => handleDelete(employee.id)}>Delete</button>
          </table>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
