import { SignUp } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div className='flex justify-center text-black mt-5'>
        <SignUp />
    </div>
  )
}

export default Page