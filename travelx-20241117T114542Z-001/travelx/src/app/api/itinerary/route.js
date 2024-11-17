import db from "@/lib/db";
import { NextResponse } from "next/server";
import isAdminUser from "@/lib/isAdminUser";

export async function GET(req){
    try {
        const itineraries = await db.itinerary.findMany({
            take: 10
        })

        return NextResponse.json(itineraries)
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
            city,
            daysType,
            desc,
            budgetType,
            details 
        } = body

        const newItinerary = await db.itinerary.create({
            data: {
                city,
                desc,
                budgetType,
                daysType,
                details: details.map(details => ({
                    dayNumber: details.dayNumber,
                    time: details.time,
                    desc: details.desc
                  }))
                
            }
        })

        return NextResponse.json(newItinerary)
    } catch (error) {
        return NextResponse.error(error)
    }
}