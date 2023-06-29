import { Employee } from '../ts';

export const createEmployee = (employee: Employee) =>
  fetch('http://localhost:3001/employee', {
    method: 'POST',
    body: JSON.stringify(employee),
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  })
    .then((res) => res.json())
    .then((res) => res);

export const getEmployees = () =>
  fetch('http://localhost:3001/employee', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  })
    .then((res) => res.json())
    .then((res) => res);
