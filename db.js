const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "pass",
  host: "localhost",
  port: 5432,
  database: "node_postgres_practice",
});

module.exports = pool;