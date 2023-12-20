const Pool = require("pg").Pool;

const connectionString = "postgresql://postgres:d5Bb24FfeGaFGdG2FF4a*Fbce1G1dB6a@monorail.proxy.rlwy.net:15125/railway";

const pool = new Pool({
  connectionString,
});

module.exports = pool;
