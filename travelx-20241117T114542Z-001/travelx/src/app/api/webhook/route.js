import db from "@/lib/db";
import { getDatesInRange } from "@/lib/dateToMilliseconds";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-10-28.acacia",
});

export async function POST(req) {
    const sig = headers().get("stripe-signature");
    const body = await req.text();

    let event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (error) {
        console.error("Webhook Error:", error.message);
        return NextResponse.json({ error: "Webhook Error" }, { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        const paymentIntentId = session.payment_intent;

        try {
            const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
            const chargeId = paymentIntent.latest_charge;

            const {
                startDate,
                endDate,
                listingId,
                pricePerNight,
                daysDifference,
                userId,
            } = session.metadata;

            const reservedDates = getDatesInRange(startDate, endDate);
            const ReservationPrice = Number(pricePerNight*daysDifference)

            const reservationData = {
                userId,
                listingId,
                startDate,
                endDate,
                chargeId,
                reservedDates,
                ReservationPrice,
                daysDifference: Number(daysDifference),
            };

            const newReservation = await db.reservation.create({
                data: reservationData,
            });

            // Send email functionality (implement as needed)

            return NextResponse.json(newReservation, { status: 200 });
        } catch (error) {
            console.error("Error processing payment intent:", error);
            return NextResponse.json({ error: "Error processing payment intent" }, { status: 500 });
        }
    }

    return NextResponse.json({ received: true }, { status: 200 }); // Acknowledge receipt of the event
}
