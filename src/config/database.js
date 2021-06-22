const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Data base connection:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Database connected!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};