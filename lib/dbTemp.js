import sql from "mssql";

// Utilise la chaîne de connexion via une variable d’environnement
const connectionString = process.env.AZURE_SQL_CONNECTION;

export async function execTempProcedure(procName) {
  const pool = await sql.connect(connectionString);
  const result = await pool.request().execute(procName);
  await pool.close();
  return result.recordset;
}
