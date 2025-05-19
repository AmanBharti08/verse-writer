'use client';
// import React from 'react'
import React from 'react'
import Image from 'next/image'

//styles
import Styles from "./signin.module.scss"

//icons
import { FcGoogle } from "react-icons/fc";
import { EnvelopeSimple, DeviceMobileCamera } from 'phosphor-react';

//fonts
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

//images import
import cole from '../../public/images/cole.webp'
import eminem from '../../public/images/eminem.webp'
import harlow from '../../public/images/harlow.webp'
import kendrick from '../../public/images/kendrick.webp'

const page = () => {
  return (
    <div className={`h-screen w-screen ${montserrat.className}`}>
      <div className='bg-[#121212] p-5 flex flex-col gap-5 h-screen w-screen'>
        <section className='  h-6/11 flex  justify-center items-center gap-2'>
          <div className='flex flex-col gap-2 l  items-end justify-center'>
            <div ><Image src={kendrick} alt='kendrick' className={Styles.kendrick} /></div>
            <div ><Image src={harlow} alt='harlow' className={Styles.harlow} /></div>
          </div>
          <div className='flex flex-col gap-2 '>
            <div><Image src={eminem} alt='eminem' className={Styles.eminem} /></div>
            <div><Image src={cole} alt='cole' className={Styles.cole} /></div>
          </div>

        </section>
        <section className='bg-[#212121] h-4/9 p-5 rounded-4xl flex flex-col gap-2'>
          <h2 className='text-[#B3B3B3] text-4xl font-bold'>Welcome back</h2>
          <p className='text-[#B3B3B3] font-light'>Continue the legacy
            Tap down your real emotions with this notepad.</p>
          <div className='mt-2.5 flex flex-col gap-4'>
            <div className='bg-[#FFFFFF] rounded-4xl p-4 flex items-center justify-center gap-2'><FcGoogle size={30} />
              Sign in with Google</div>
            <div className='bg-[#535353] rounded-4xl p-4 flex gap-2 items-center justify-center text-[#B3B3B3]'><EnvelopeSimple size={30} /><span>Sign in with email</span></div>
            <div className='bg-[#535353] rounded-4xl p-4 flex gap-2 items-center justify-center text-[#B3B3B3]'><DeviceMobileCamera size={30} />Sign in with phone number</div>
          </div>

          <h6 className='text-center text-[#B3B3B3] font-bold'>Don’t have an account? <span className='text-[#ffffff]'>Sign up</span></h6>
        </section>
      </div>
    </div >
  )
}

export default page