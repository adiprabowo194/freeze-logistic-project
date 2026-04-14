import { NextResponse } from "next/server";
import CoverageAreas from "@/models/CoverageAreas";
import { NextRequest } from "next/server";
import { Op } from "sequelize";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("q") || "";

    const data = await CoverageAreas.findAll({
      attributes: ["id", "suburb", "state", "postcode"],
      where: search
        ? {
            [Op.or]: [
              { suburb: { [Op.like]: `%${search}%` } },
              { state: { [Op.like]: `%${search}%` } },
              { postcode: { [Op.like]: `%${search}%` } },
            ],
          }
        : undefined,
      limit: 10,
    });

    return NextResponse.json(
      data.map((item) => {
        const raw = item.get(); // Mengambil data objek mentah
        return {
          value: raw.id,
          label: `${raw.suburb}, ${raw.postcode}`,
        };
      }),
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
