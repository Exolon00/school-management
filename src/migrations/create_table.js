import { getClient } from '../config/db.js'


async function createTable() {
  const pool = getClient()

  try {
    const conn = await pool.getConnection()
    const TableQuery = `
      CREATE TABLE IF NOT EXISTS schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        latitude FLOAT NOT NULL,
        longitude FLOAT NOT NULL
      );
    `;
    const [results] = await conn.query(TableQuery);
    console.log('Table created', results);
    conn.release()
  } catch (err) {
    console.error('Error creating table:', err);
  } finally {

  }
}

createTable();