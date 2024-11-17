import db from "@/lib/db";
import { calcAndSortFlights } from "@/lib/sortFlights";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const flights = await db.flight.findMany({
            include: {
                reviews: true
            }
        })
        const sortedFlights = calcAndSortFlights(flights)

        return NextResponse.json(sortedFlights)
    } catch (error) {
        return NextResponse.error(error)
    }
}