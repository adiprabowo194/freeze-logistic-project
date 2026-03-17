import { NextResponse } from "next/server";
import CoverageAreas from "@/models/CoverageAreas";
import { NextRequest } from "next/server";
import { Op } from "sequelize";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("q") || "";

  const data = await CoverageAreas.findAll({
    attributes: ["id", "suburb", "state"],

    where: {
      [Op.or]: [
        {
          suburb: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          state: {
            [Op.like]: `%${search}%`,
          },
        },
      ],
    },

    limit: 10,
  });

  return NextResponse.json(
    data.map((item) => ({
      value: item.id,
      label: `${item.suburb}, ${item.state}`,
    }))
  );
}