import React from 'react'
import Image from 'next/image'


//images import
import cole from '../../public/images/cole.webp'
import eminem from '../../public/images/eminem.webp'
import harlow from '../../public/images/harlow.webp'
import kendrick from '../../public/images/kendrick.webp'

const page = () => {
  return (
    <div className='h-screen w-screen'>
      <div className='bg-[#121212] p-5 flex flex-col gap-5 h-screen w-screen'>
        <div className=' grid grid-cols-2 h-5/9 '>
          <div ><Image src={cole} alt='' /></div>
          <div><Image src={eminem} alt='' /></div>
          <div><Image src={harlow} alt='' /></div>
          <div><Image src={kendrick} alt='' /></div>
        </div>
        <div className='bg-[#212121] h-4/9 p-5 rounded-4xl flex flex-col gap-2'>
          <h2 className='text-[#B3B3B3] text-4xl font-bold'>Get Started</h2>
          <p className='text-[#B3B3B3] font-light'>Continue the legacy
            tap down your real emotions with this notepad.</p>
          <div className='mt-2.5 flex flex-col gap-4'>
            <div className='bg-[#FFFFFF] rounded-4xl p-4 flex items-center justify-center gap-2'>Sign in with Google</div>
            <div className='bg-[#535353] rounded-4xl p-4 flex items-center justify-center text-[#B3B3B3]'>Sign in with email</div>
            <div className='bg-[#535353] rounded-4xl p-4 flex items-center justify-center text-[#B3B3B3]'>Sign in with phone number</div>
          </div>

          <h6 className='text-center text-[#B3B3B3] font-bold'>Don’t have an account? <span className='text-[#ffffff]'>Sign up</span></h6>
        </div>
      </div>
    </div >
  )
}

export default page