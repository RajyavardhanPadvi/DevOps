import db from '@/lib/db'
import { NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'

export async function POST(req) {
    try {
        const body = await req.json()

        const {
            email,
            username,
            image,
            password
        } = body

        const isExisting = await db.user.findUnique({
            where: {
                email
            }
        })

        if (isExisting) {
            return NextResponse.error({ message: "You've already registered" }, { status: 409 })
        }

        const hashedPassword = await bcryptjs.hash(password, 10)

        await db.user.create({
            data: {
                email,
                username,
                image,
                password: hashedPassword
            }
        })

        return NextResponse.json({ message: "User has registered successfully" }, { status: 201 })
    } catch (error) {
        console.error("Registration Error:", error);
        return NextResponse.json({ message: error.message || "Internal Server Error" }, { status: 500 });
    }
}
