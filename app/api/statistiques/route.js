// app/api/statistiques/route.js
import { NextResponse } from "next/server";
import { execTempProcedure } from "@/lib/dbTemp";
import { execPollutionProcedure } from "@/lib/dbPollution";
import { execPrecipProcedure } from "@/lib/dbPrecip";

export async function GET() {
  try {
    // Température
    const anneePlusChaude = await execTempProcedure("AnneePlusChaude");
    const anneeMoinsChaude = await execTempProcedure("AnneeMoinsChaude");
    const provincePlusChaude = await execTempProcedure("ProvincePlusChaude");
    const provinceMoinsChaude = await execTempProcedure("ProvinceMoinsChaude");

    // Pollution
    const anneePlusPolluee = await execPollutionProcedure("AnneePlusPolluee");
    const anneeMoinsPolluee = await execPollutionProcedure("AnneeMoinsPolluee");
    const provincePlusPolluee = await execPollutionProcedure(
      "ProvincePlusPolluee"
    );
    const provinceMoinsPolluee = await execPollutionProcedure(
      "ProvinceMoinsPolluee"
    );

    // Précipitations
    const anneePlusPluvieuse = await execPrecipProcedure("AnneePlusPluvieuse");
    const anneeMoinsPluvieuse = await execPrecipProcedure(
      "AnneeMoinsPluvieuse"
    );
    const provincePlusPluvieuse = await execPrecipProcedure(
      "ProvincePlusPluvieuse"
    );
    const provinceMoinsPluvieuse = await execPrecipProcedure(
      "ProvinceMoinsPluvieuse"
    );

    return NextResponse.json({
      // Température
      anneePlusChaude: anneePlusChaude[0],
      anneeMoinsChaude: anneeMoinsChaude[0],
      provincePlusChaude: provincePlusChaude[0],
      provinceMoinsChaude: provinceMoinsChaude[0],
      // Pollution
      anneePlusPolluee: anneePlusPolluee[0],
      anneeMoinsPolluee: anneeMoinsPolluee[0],
      provincePlusPolluee: provincePlusPolluee[0],
      provinceMoinsPolluee: provinceMoinsPolluee[0],
      // Précipitations
      anneePlusPluvieuse: anneePlusPluvieuse[0],
      anneeMoinsPluvieuse: anneeMoinsPluvieuse[0],
      provincePlusPluvieuse: provincePlusPluvieuse[0],
      provinceMoinsPluvieuse: provinceMoinsPluvieuse[0],
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
