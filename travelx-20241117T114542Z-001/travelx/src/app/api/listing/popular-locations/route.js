import Alibaug from "/public/alibaug.webp"
import Coorg from "/public/coorg.jpg"
import Daman from "/public/daman.jpg"
import Delhi from "/public/delhi.jpg"
import Goa from "/public/goa.jpg"
import Haridwar from "/public/haridwar.jpg"
import Leh from "/public/leh.jpg"
import Lonavala from "/public/lonavala.jpg"
import Manali from "/public/manali.jpg"
import Mumbai from "/public/mumbai.jpg"
import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(req) {
    try {
        const alibaug_listings = await db.listing.count({
            where: {
                location: "alibaug"
            }
        })
        const coorg_listings = await db.listing.count({
            where: {
                location: "coorg"
            }
        })
        const daman_listings = await db.listing.count({
            where: {
                location: "daman"
            }
        })
        const new_delhi_listings = await db.listing.count({
            where: {
                location: "new-delhi"
            }
        })
        const goa_listings = await db.listing.count({
            where: {
                location: "goa"
            }
        })
        const haridwar_listings = await db.listing.count({
            where: {
                location: "haridwar"
            }
        })
        const leh_listings = await db.listing.count({
            where: {
                location: "leh"
            }
        })
        const lonavala_listings = await db.listing.count({
            where: {
                location: "lonavala"
            }
        })
        const manali_listings = await db.listing.count({
            where: {
                location: "manali"
            }
        })
        const mumbai_listings = await db.listing.count({
            where: {
                location: "mumbai"
            }
        })

        



        const results = [
            {
                numOfPlaces: alibaug_listings,
                image: Alibaug,
                value: "alibaug"
            },
            {
                numOfPlaces: coorg_listings,
                image: Coorg,
                value: "coorg"
            },
            {
                numOfPlaces: daman_listings,
                image: Daman,
                value: "daman"
            },
            {
                numOfPlaces: new_delhi_listings,
                image: Delhi,
                value: "new-delhi"
            },
            {
                numOfPlaces: goa_listings,
                image: Goa,
                value: "goa"
            },
            {
                numOfPlaces: haridwar_listings,
                image: Haridwar,
                value: "haridwar"
            },
            {
                numOfPlaces: leh_listings,
                image: Leh,
                value: "leh"
            },
            {
                numOfPlaces: lonavala_listings,
                image: Lonavala,
                value: "lonavala"
            },
            {
                numOfPlaces: manali_listings,
                image: Manali,
                value: "manali"
            },
            {
                numOfPlaces: mumbai_listings,
                image: Mumbai,
                value: "mumbai"
            },
        ]

        const sortedResults = results.sort((a, b) => b.numOfPlaces - a.numOfPlaces).slice(0, 6)

        return NextResponse.json(sortedResults)
    } catch (error) {
        return NextResponse.error(error)
    }
}