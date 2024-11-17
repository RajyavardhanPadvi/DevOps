import db from "@/lib/db";
import { getCurrentUser } from "@/lib/currentUser";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { text, stars } = await req.json();
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return NextResponse.json({ message: "User not authenticated" }, { status: 401 });
        }

        const { id: userId } = currentUser;

        const { searchParams } = new URL(req.url);
        const listingId = searchParams.get("id");

        const createdReview = await db.review.create({
            data: {
                text,
                stars,
                listingId,
                userId
            },
            include: {
                user: true
            }
        });

        return NextResponse.json(createdReview, { status: 201 });
    } catch (error) {
        console.error("Error creating review:", error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
