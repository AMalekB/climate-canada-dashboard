import sql from "mssql";

const config = {
  user: "adminuser",
  password: "Climatecanada*",
  server: "sqlclimatecanada.database.windows.net",
  database: "TemperatureDB",
  options: {
    encrypt: true,
  },
};

export async function execTempProcedure(procName) {
  const pool = new sql.ConnectionPool(config);
  await pool.connect();
  const result = await pool.request().execute(procName);
  await pool.close();
  return result.recordset;
}
