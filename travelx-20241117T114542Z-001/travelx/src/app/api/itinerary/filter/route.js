import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url)

        const city = searchParams.get("city")
        const budgetType = searchParams.get("budgetType")
        const daysType = searchParams.get("daysType")

        const Itinerary = await db.itinerary.findMany({
            where: {
                city,
                budgetType,
                daysType
            }
        })

        return NextResponse.json(Itinerary)
    } catch (error) {
        return NextResponse.error(error)
    }
}