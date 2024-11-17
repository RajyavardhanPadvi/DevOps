import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, ctx) {
    try {
        const { id } = ctx.params;
        
        // Check if `id` is provided
        if (!id) {
            return NextResponse.json({ error: "Itinerary ID is required" }, { status: 400 });
        }

        // Fetch the itinerary by ID
        const itinerary = await db.itinerary.findUnique({
            where: {
                id: id,
            },
        });

        // Check if the itinerary was found
        if (!itinerary) {
            return NextResponse.json({ error: "Itinerary not found" }, { status: 404 });
        }

        // Return the itinerary data
        return NextResponse.json(itinerary);
    } catch (error) {
        console.error("Error fetching itinerary:", error);  // Log the error for debugging
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
