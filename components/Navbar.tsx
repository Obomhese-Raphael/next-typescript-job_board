import Image from 'next/image'
import React from 'react'
import "../styles/Navbar.css"
import Link from 'next/link'

const Navbar: React.FC = () => {
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
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/login">Login</a></li>
            <Link href={"/signup"}><button className='sign-up'>Sign up</button></Link>
            <Link href={"/post"}><button className='post'>Post a job</button></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar