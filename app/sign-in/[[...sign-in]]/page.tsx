import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div className='flex justify-center text-black mt-5 mb-20'>
        <SignIn />
    </div>
  )
}

export default Page