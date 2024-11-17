import db from "@/lib/db";
import { NextResponse } from "next/server";
import isAdminUser from "@/lib/isAdminUser";

export async function GET(req){
    try {
        const flights = await db.flight.findMany({
            take: 10
        })

        return NextResponse.json(flights)
    } catch (error) {
        return NextResponse.error(error)
    }
}

export async function POST(req) {
    try {
        await isAdminUser()

        const body = await req.json()
        Object.values(body).forEach((v) => {
            if (v === "") return NextResponse.error({ message: "Fill all fields!" })
        })

        const {
            flightNumber,
            airline,
            duration,
            desc,
            type,
            planetype,
            seats,
            price,
            departureAt,
            arrivalAt,
            departure,
            arrival,
            imageUrls
        } = body

        const newFlight = await db.flight.create({
            data: {
                flightNumber,
                airline,
                duration,
                desc,
                type,
                planetype,
                seats,
                price,
                departureAt,
                arrivalAt,
                departure,
                arrival,
                imageUrls
            }
        })

        return NextResponse.json(newFlight)
    } catch (error) {
        return NextResponse.error(error)
    }
}