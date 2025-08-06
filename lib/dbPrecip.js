import sql from "mssql";

// Change dynamiquement la base de données vers PrecipitationsDB
const connectionString = process.env.AZURE_SQL_CONNECTION.replace(
  "TemperatureDB",
  "PrecipitationsDB"
);

export async function execPrecipProcedure(procName) {
  const pool = await sql.connect(connectionString);
  const result = await pool.request().execute(procName);
  await pool.close();
  return result.recordset;
}
