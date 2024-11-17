import { NextResponse } from "next/server";
import { getPlaiceholder } from "plaiceholder";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const url = searchParams.get("url");

        if (!url) {
            return NextResponse.json({ error: "Image URL is required" }, { status: 400 });
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch the image from the URL");
        }

        const buffer = Buffer.from(await response.arrayBuffer());
        const { base64 } = await getPlaiceholder(buffer);

        return NextResponse.json({ base64 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
