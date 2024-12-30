"use client"

import Image from 'next/image'
import React from 'react'
import "../styles/Navbar.css"
import Link from 'next/link'
import {
  SignedOut,
} from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { SignedIn, UserButton } from "@clerk/nextjs"


const Navbar: React.FC = () => {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push('/sign-in');
  };

  return (
    <div className='navbar'>
      <div className="navbar-container">
        <div className="left">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt='logo'
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="right">
          <ul>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href="/jobs">Jobs</Link></li>
            <div className="flex gap-2">
              <li>
                <SignedOut>
                  <button className='border post' onClick={handleSignInClick}>Sign In</button>
                </SignedOut>
              </li>
              <li>
                <Link href={"/post"}><button className='post'>Post a job</button></Link>
              </li>
              <li className='ml-2'>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar