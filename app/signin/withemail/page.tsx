"use client"

import React from 'react'
import { useState, FormEvent, FC } from "react";

//Styles
import Styles from "./signinWithEmail.module.scss"
//fonts
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
const SigninWithEmail: FC = () => {


    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            })

            const data = await res.json();
            console.log(data);
            if (res.status === 201) {
                alert("User logged in successfully");
                setEmail("");
                setPassword("");
            } else {
                alert(data.error);
            }

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className={`h-screen w-screen ${montserrat.className}`}>
            <div className='bg-[#121212] p-5 flex flex-col justify-center h-screen w-screen'>
                <section className={`bg-[#212121]  p-5 rounded-4xl flex flex-col gap-2  ${Styles.signupWithEmailContainer}`}>
                    <h2 className='text-[#B3B3B3] text-4xl font-bold'>Welcome Back</h2>
                    <form onSubmit={handleFormSubmit} className='mt-2.5 flex flex-col gap-4'>
                        <input className='bg-[#535353] rounded-4xl py-4 px-8 text-[#B3B3B3]' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email'></input>
                        <input className='bg-[#535353] rounded-4xl py-4 px-8 text-[#B3B3B3]' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password'></input>
                        <button className='bg-[#ffffff] rounded-4xl py-4 px-8 text-center text-[#000000]' type="submit">Sign In</button>
                    </form>


                </section>
            </div>

        </div>
    )
}

export default SigninWithEmail