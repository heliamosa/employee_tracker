// src/queries.js

const pool = require('./db');

// Function to view all departments
function viewDepartments() {
  return pool.query('SELECT id, name FROM department ORDER BY id;');
}

// Function to view all roles with department and salary
function viewRoles() {
  const sql = `
    SELECT r.id, r.title, d.name AS department, r.salary
    FROM role r
    LEFT JOIN department d ON r.department_id = d.id
    ORDER BY r.id;
  `;
  return pool.query(sql);
}

// Function to view all employees with role, department, salary, and manager
function viewEmployees() {
  const sql = `
    SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary,
           CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employee e
    LEFT JOIN role r ON e.role_id = r.id
    LEFT JOIN department d ON r.department_id = d.id
    LEFT JOIN employee m ON e.manager_id = m.id
    ORDER BY e.id;
  `;
  return pool.query(sql);
}

// Function to add a new department
function addDepartment(name) {
  return pool.query('INSERT INTO department (name) VALUES ($1) RETURNING *;', [name]);
}

// Function to add a new role
function addRole(title, salary, department_id) {
  return pool.query(
    'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *;',
    [title, salary, department_id]
  );
}

// Function to add a new employee
function addEmployee(first_name, last_name, role_id, manager_id) {
  return pool.query(
    'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *;',
    [first_name, last_name, role_id, manager_id || null]
  );
}

// Function to update an employee's role
function updateEmployeeRole(employeeId, role_id) {
  return pool.query('UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *;', [role_id, employeeId]);
}

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
