import { footerLinks } from '@/constants';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className='mx-10 mt-30 mb-10'>
      <div className="container footer-container justify-between flex">
        <div className="left gap-5 flex flex-col">
          <Image
            src={"/logo.png"}
            alt='footer-logo'
            height={100}
            width={100}
          />
          <h4 className='text-sm'>Connect with us at</h4>
          <ul className='flex flex-row gap-4'>
            <li className='cursor-pointer hover:bg-gray-500 p-2 rounded-full hover:text-white'><FaFacebookF /></li>
            <li className='cursor-pointer hover:bg-gray-500 p-2 rounded-full hover:text-white'><FaInstagram /></li>
            <li className='cursor-pointer hover:bg-gray-500 p-2 rounded-full hover:text-white'><RiTwitterXFill /></li>
            <li className='cursor-pointer hover:bg-gray-500 p-2 rounded-full hover:text-white'><FaLinkedin /></li>
          </ul>
          <p className='flex flex-row'>
            <Image
              src={"/assets/play_store.svg"}
              alt='play-store'
              height={40}
              width={120}
              className='cursor-pointer'
            />
            <Image
              src={"/assets/app_store.svg"}
              alt='play-store'
              height={40}
              width={120}
              className='cursor-pointer'
            />
          </p>
        </div>
        <div className="right footer__links">
          {
            footerLinks.map((item) => (
              <div key={item.title} className='footer__link'>
                <h4 className='font-bold'>{item.title}</h4>
                <div className="each-link flex flex-col gap-5">
                  {
                    item.links.map((link) => (
                      <Link
                        key={link.title}
                        href={link.url}
                        className='text-gray-500 link'
                      >
                        {link.title}
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <hr />
      <p className='copyright'>&copy; Job-Genie. All rights reserved</p>
    </footer>
  )
}

export default Footer