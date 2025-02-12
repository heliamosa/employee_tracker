CREATE DATABASE employee_tracker;

\c employee_tracker; -- Use this for PostgreSQL to connect to the database

-- Table: departments
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Table: roles
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT REFERENCES department(id) ON DELETE SET NULL
);

-- Table: employees
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT REFERENCES role(id) ON DELETE SET NULL,
    manager_id INT REFERENCES employee(id) ON DELETE SET NULL
);
