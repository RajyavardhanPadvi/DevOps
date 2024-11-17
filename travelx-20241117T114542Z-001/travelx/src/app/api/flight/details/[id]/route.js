import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const { id } = params;
        
        if (!id) {
            return NextResponse.json({ error: "Flight ID is required" }, { status: 400 });
        }

        const flight = await db.flight.findUnique({
            where: { id },
            include: {
                reviews: true,
                reservations: true
            }
        });

        if (!flight) {
            return NextResponse.json({ error: "Flight not found" }, { status: 404 });
        }

        const avgRating = flight.reviews.length > 0
            ? Number((flight.reviews.reduce((a, b) => a + b.stars, 0) / flight.reviews.length).toFixed(2))
            : 0;

        return NextResponse.json({
            ...flight,
            avgRating
        });
    } catch (error) {
        console.error('Error fetching flight:', error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}