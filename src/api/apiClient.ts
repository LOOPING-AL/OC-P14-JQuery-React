/* eslint-disable no-console */
import { Employee } from '../ts';

export const createEmployee = (employee: Employee) =>
  fetch('http://localhost:3001/employee/create', {
    method: 'POST',
    body: JSON.stringify(employee),
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.error(error));

export const getEmployees = (body: any) =>
  fetch('http://localhost:3001/employee/get', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.error(error));
