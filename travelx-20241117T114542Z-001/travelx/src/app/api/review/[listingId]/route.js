// In your API route, e.g., pages/api/reviews/[listingId].js

import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, ctx) {
    try {
        const { listingId } = ctx.params;

        const listingWithReviews = await db.listing.findUnique({
            where: {
                id: listingId,
            },
            include: {
                reviews: {
                    include: {
                        user: {
                            select: {
                                username: true,
                                image: true, // Ensure `image` is an array of strings in the User model
                            },
                        },
                    },
                    orderBy: {
                        createdAt: "desc",
                    },
                },
            },
        });

        if (!listingWithReviews) {
            return NextResponse.json({ message: "Listing not found" }, { status: 404 });
        }

        return NextResponse.json(listingWithReviews.reviews, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
