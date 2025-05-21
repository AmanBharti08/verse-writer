import { NextResponse } from "next/server";
import dbConnect from "@/lib/db"

export default async function GET(request: Request){
    console.log(dbConnect)
}

