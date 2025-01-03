const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Secret key for JWT
const SECRET_KEY = 'your-secret-key';

// Temporary in-memory data stores
const employees = [
  { id: 1, name: 'John Doe', position: 'Developer', salary: 50000 },
  { id: 2, name: 'Jane Smith', position: 'Designer', salary: 45000 },
];
const users = [];

// Middleware to verify token
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Token is required' });

  try {
    const decoded = jwt.verify(token.split(' ')[1], SECRET_KEY);
    req.user = decoded; // Attach user data to request
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

// Routes
// =========================

// User Registration
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const existingUser = users.find((user) => user.username === username);
  if (existingUser)
    return res.status(400).json({ message: 'User already exists' });

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Add new user
  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully' });
});

// User Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const user = users.find((user) => user.username === username);
  if (!user)
    return res.status(400).json({ message: 'Invalid username or password' });

  // Validate password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({ message: 'Invalid username or password' });

  // Generate JWT token
  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
    expiresIn: '1h',
  });

  res.json({ token });
});

// =========================
// Protected Employee Routes
// =========================

// Get all employees
app.get('/employees', verifyToken, (req, res) => {
  res.json(employees);
});

// Get a specific employee
app.get('/employees/:id', verifyToken, (req, res) => {
  const employee = employees.find((emp) => emp.id === parseInt(req.params.id));
  if (!employee) return res.status(404).json({ message: 'Employee not found' });
  res.json(employee);
});

// Create a new employee
app.post('/employees', verifyToken, (req, res) => {
  const newEmployee = {
    id: employees.length + 1,
    name: req.body.name,
    position: req.body.position,
    salary: req.body.salary,
  };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

// Update an employee
app.put('/employees/:id', verifyToken, (req, res) => {
  const employee = employees.find((emp) => emp.id === parseInt(req.params.id));
  if (!employee) return res.status(404).json({ message: 'Employee not found' });

  employee.name = req.body.name || employee.name;
  employee.position = req.body.position || employee.position;
  employee.salary = req.body.salary || employee.salary;

  res.json(employee);
});

// Delete an employee
app.delete('/employees/:id', verifyToken, (req, res) => {
  const employeeIndex = employees.findIndex(
    (emp) => emp.id === parseInt(req.params.id),
  );
  if (employeeIndex === -1)
    return res.status(404).json({ message: 'Employee not found' });

  employees.splice(employeeIndex, 1);
  res.json({ message: 'Employee deleted' });
});

// =========================
// Start the server
// =========================
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
