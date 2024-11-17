import db from "@/lib/db";
import isAdminUser from "@/lib/isAdminUser";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await isAdminUser()

        const allFlights = await db.flight.findMany({})

        return NextResponse.json(allFlights)
    } catch (error) {
        return NextResponse.error(error)
    }
}