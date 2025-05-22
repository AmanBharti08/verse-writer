import { NextResponse } from "next/server";
import dbConnect from "@/lib/db"
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    await dbConnect()
    console.log(dbConnect)

    try {
        const body = await request.json()
        const { username, email, password } = body
        console.log("Body: ", body)
        console.log("Username: ", username)
        console.log("Email: ", email)
        // console.log("Password: ", password)

        if (!username || !email || !password) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            if (existingUser.isVerified) {
                return NextResponse.json({ error: "This email is already registered with Google. Please use Google login." }, { status: 400 });
            } else {
                return NextResponse.json({ error: "User already exists" }, { status: 400 });
            }
        }


        const salt = await bcrypt.genSalt(15);
        const hashed = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            username,
            email,
            hashedPassword: hashed,
            isVerified: false,
        });

        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error in getting data" }, { status: 500 });

    }
}

// export async function POST() {
//   return new Response("User API works!", { status: 200 });
// }

