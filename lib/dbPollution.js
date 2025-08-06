// lib/dbPollution.js
import sql from "mssql";

// Remplace "TemperatureDB" par "PollutionDB" dans la chaîne de connexion
const connectionString = process.env.AZURE_SQL_CONNECTION.replace(
  "TemperatureDB",
  "PollutionDB"
);

export async function execPollutionProcedure(procName) {
  const pool = await sql.connect(connectionString);
  const result = await pool.request().execute(procName);
  await pool.close();
  return result.recordset;
}
