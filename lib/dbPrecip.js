import sql from "mssql";

const config = {
  user: "adminuser",
  password: "Climatecanada*",
  server: "sqlclimatecanada.database.windows.net",
  database: "PrecipitationsDB",
  options: {
    encrypt: true,
  },
};

export async function execPrecipProcedure(procName) {
  const pool = new sql.ConnectionPool(config);
  await pool.connect(); // forcer la connexion fraîche
  const result = await pool.request().execute(procName);
  await pool.close(); // bien fermer ensuite
  return result.recordset;
}
