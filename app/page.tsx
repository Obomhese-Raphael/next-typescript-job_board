"use client"
import Diff from '@/components/Diff';
import Image from 'next/image';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
const Home = () => {
  return (
    <div className='home container 2xl:px-20 mx-auto my-10'>
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl">
        <h3 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000+ jobs to apply</h3>
        <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Empower your career journey. This is your starting point for discovering exceptional job opportunities that align with your skills, passions, and aspirations.</p>
        <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 sm:mx-auto">
          <div className="flex items-center">
            <CiSearch className='h-4 sm:h-5 text-black' />
            <input type="text" placeholder="Search for jobs" className="max-sm:text-xs p-2 rounded outline-none w-full" />
          </div>
          <div className="flex items-center">
            <CiLocationOn className='text-black' />
            <input type="text" placeholder="Location" className="max-sm:text-xs p-2 rounded outline-none w-full ml-4" />
          </div>
          <button className='bg-blue-600 px-6 py-2 rounded text-white m-1'>Search</button>
        </div>
      </div>
      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex">
        <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
          <p className="font-medium">Trusted by</p>
          <Image
            src={"https://job-portal-gs-client.vercel.app/assets/microsoft_logo-BrRPO5-k.svg"}
            alt='microsoft'
            width={70}
            height={70}
          />
          <Image
            src={"https://job-portal-gs-client.vercel.app/assets/adobe_logo-DxU2Zu01.png"}
            alt='adobe'
            width={50}
            height={50}
          />
          <Image
            src={"https://job-portal-gs-client.vercel.app/assets/amazon_logo-Bm1anaQD.png"}
            alt='amazon'
            width={50}
            height={50}
          />
          {/* walmart */}
          <Image
            src={"https://job-portal-gs-client.vercel.app/assets/walmart_logo-BNc35QHy.svg"}
            alt='walmart'
            width={70}
            height={70}
          />
          {/* google */}
          <Image
            src="/assets/samsung_logo.png"
            alt="google"
            width={70}
            height={70}
          />
          <Image
            src="/assets/accenture_logo.png"
            alt="accenture"
            width={70}
            height={70}
          />
        </div>
      </div>
      <Diff />
    </div>
  )
}

export default Home