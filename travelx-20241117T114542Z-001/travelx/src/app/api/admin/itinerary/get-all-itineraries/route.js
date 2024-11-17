import db from "@/lib/db";
import isAdminUser from "@/lib/isAdminUser";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await isAdminUser()

        const allItineraries = await db.itinerary.findMany({})

        return NextResponse.json(allItineraries)
    } catch (error) {
        return NextResponse.error(error)
    }
}