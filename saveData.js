const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3002;
app.use(cors());

app.use(bodyParser.json());

// MySQL Database Connection
const pool = mysql.createPool({
  host: 'server148.iseencloud.com',
  user: 'easuneng_merkadoTesting',
  password: '232003@Anbu',
  database: 'easuneng_sample',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Check if a phone number already exists
app.get('/api/checkPhoneNumber/:phoneNumber', async (req, res) => {
  const phoneNumber = req.params.phoneNumber;

  try {
    const connection = await pool.getConnection();
    const [results] = await connection.query('SELECT COUNT(*) AS count FROM users WHERE number = ?', [phoneNumber]);
    connection.release();

    res.json({ exists: results[0].count > 0 });
  } catch (error) {
    console.error('Error checking phone number:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new user to the database
app.post('/api/users', async (req, res) => {
  const { name, age, number } = req.body;

  try {
    const connection = await pool.getConnection();
    await connection.query('INSERT INTO users (name, age, number) VALUES (?, ?, ?)', [name, age, number]);
    connection.release();

    res.json({ success: true });
  } catch (error) {
    console.error('Error adding user:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [results] = await connection.query('SELECT * FROM users');
    connection.release();

    res.json(results);
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update user data
app.put('/api/users/:id', async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;

  try {
    const connection = await pool.getConnection();
    await connection.query(
      'UPDATE users SET name=?, age=?, number=? WHERE id=?',
      [updatedUserData.name, updatedUserData.age, updatedUserData.number, userId]
    );
    connection.release();

    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a user by ID
app.delete('/api/users/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const connection = await pool.getConnection();
    await connection.query('DELETE FROM users WHERE id = ?', [userId]);
    connection.release();

    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting user:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
