import { NextResponse } from "next/server";
import dbConnect from "@/lib/db"
import Track from "@/models/Track";

export async function POST(request: Request) {
    await dbConnect()
    console.log(dbConnect)

    try{
        const body = request.json()
        const {title,lyrics,mood,beatType,beatUrl,startLoop,endLoop} = body
    }
}