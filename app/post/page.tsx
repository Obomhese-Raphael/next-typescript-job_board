"use client"

import Link from 'next/link';
import React from 'react';
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdOutlineError } from "react-icons/md";
import { toast } from 'react-toastify';

const Post = () => {
  const handlePostSubmit = () => {
    toast.success('Post submitted!');
  };
  return (
    <form className="box-border flex flex-col flex-grow flex-shrink home container 2xl:px-30 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-20 rounded-xl">
        <div className="flex flex-row justify-center">
          <div className="px-3">
            <h1 className='font-bold text-lg'>Create an employer account</h1>
            <p className='text-sm'>
              Register as a recruiter, job seeker, or both to create an account and start your job search journey.
            </p>
          </div>
        </div>
      </div>
      <div className="border-box grid gap-8 mt-10 justify-center">
        <h2 className="font-bold text-black-100 text-lg leading-5">You haven&apos;t posted a job before, so you&apos;ll need to create an employer account.</h2>
        <details className=''>
          <summary className="appearance-none flex items-center bg-transparent border border-gray-300 rounded-t-lg rounded-b-r-lg rounded-b-l-lg cursor-pointer text-gray-700 px-4 py-2 justify-between">
            <span className='flex items-center gap-2 text-black'>
              <BsQuestionCircleFill />
              <p className='text-black text-xs'>Not here to post a job?</p>
            </span>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </summary>
          <div className="font-sans relative overflow-hidden border     border-gray-300 border-t-0 transition-all duration-200 ease-out
            rounded-b-lg text-gray-700 text-base font-normal leading-6">
            <div className="box-border m-0 min-w-0 w-full py-3 px-3">
              <div className="flex box-border m-0 min-w-0 flex-col gap-6">
                <div className="flex items-start m-0 flex-col flex-wrap justify-start">
                  <div className="m-0 max-w-full flex-none min-w-0">
                    <h3 className='m-0 text-[rgb(45, 45, 45)] font-bold font-sans text-sm leading-6'>People looking for jobs</h3>
                  </div>
                  <div className="m-0 max-w-full flex-none min-w-0">
                    <span className='font-sans border-b border-solid text-blue-700 text-xs underline cursor-pointer transition-colors transition-border duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)]'>
                      <Link href={'/jobs'}>Search for a job</Link>
                    </span>
                  </div>
                </div>
                <div className="flex items-start m-0 flex-col flex-wrap justify-start">
                  <div className="m-0 max-w-full flex-none min-w-0">
                    <h3 className='m-0 text-[rgb(45, 45, 45)] font-bold font-sans text-sm leading-6'>Employers</h3>
                  </div>
                  <div className="m-0 max-w-full flex-none min-w-0">
                    <span className='font-sans border-b border-solid text-blue-700 text-xs underline cursor-pointer transition-colors transition-border duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)]'>Request access to company account</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </details>
        <div className="box-border m-0 min-w-0">
          <div>
            <div className="box-border m-0 min-w-0">
              <div className="m-0 p-0 border-none box-border min-w-0 flex-1">
                <label htmlFor="company_name" className="font-sans font-bold text-gray-800 inline-block p-0 mb-1 text-xs leading-6 opacity-100 transition-opacity duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)]">Your Company&apos; name
                  <span className="box-border m-0 min-w-0 text-red-700 font-bold">*</span>
                </label>
                <span className="box-border flex items-center justify-between relative z-0 rounded-lg border bg-white">
                  <input type="text" className='box-border flex-grow m-0 rounded-lg cursor-text bg-transparent  text-xs font-sans font-normal tracking-normal leading-6 text-gray-800 px-3 py-2.5 min-h-[2.75rem] min-w-0' role='combobox' aria-autocomplete="both" aria-controls='listbox--:r1h' aria-expanded="false" autoComplete='on' maxLength={100} required placeholder='Company Name' aria-required />
                </span>
                <div className="flex text-center items-center box-border my-0.5 mx-0 min-w-0 transition-opacity duration-200 ease-out">
                  <div className="flex text-center my-0.5 mx-0 min-w-0 transition-opacity duration-200 ease-out items-center text-rose-600 text-xs mt-2 leading-relaxed">
                    <MdOutlineError />
                    <div className="ml-2">Add a company name.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border m-0 min-w-0">
              <div className="m-0 p-0 border-none box-border min-w-0 flex-1">
                <label htmlFor="company_name" className="font-sans font-bold text-gray-800 inline-block p-0 mb-1 text-xs leading-6 opacity-100 transition-opacity duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)]">Your first and last name
                  <span className="box-border m-0 min-w-0 text-red-700 font-bold">*</span>
                </label>
                <span className="box-border flex items-center justify-between relative z-0 rounded-lg border bg-white">
                  <input type="text" className='box-border flex-grow m-0 rounded-lg cursor-text bg-transparent  text-xs font-sans font-normal tracking-normal leading-6 text-gray-800 px-3 py-2.5 min-h-[2.75rem] min-w-0' role='combobox' aria-autocomplete="both" aria-controls='listbox--:r1h' aria-expanded="false" autoComplete='on' maxLength={100} required placeholder='Company Name' aria-required />
                </span>
                <div className="flex text-center items-center box-border my-0.5 mx-0 min-w-0 transition-opacity duration-200 ease-out">
                  <div className="flex text-center my-0.5 mx-0 min-w-0 transition-opacity duration-200 ease-out items-center text-rose-600 text-xs mt-2 leading-relaxed">
                    <MdOutlineError />
                    <div className="ml-2">Add your name.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border m-0 min-w-0">
              <label htmlFor="" className='font-sans opacity-100 transition-all duration-200 ease-in-out text-neutral-950 font-bold inline-block p-0 mb-1 text-xs leading-relaxed'>How you heard about us</label>
              <div className="box-border relative flex items-center z-0 w-full bg-white rounded-md border border-gray-700 outline-none transition-all duration-200 ease-in-out px-3">
                <select name="" id="" className="appearance-none z-10 m-0 pl-5 rounded-md outline-none border-none text-sm font-sans font-normal tracking-normal w-full h-10 py-2 bg-transparent text-neutral-950">
                  <option value="" label='Select an option'>Select an option</option>
                  <option value="radio" label='Radio (AM/FM/XM)'>Radio (AM/FM/XM)</option>
                  <option value="mail" label="Mail">Mail</option>
                  <option value="magazine" label="Online Video">online video</option>
                  <option value="streamingAudio" label='Streaming Audio'>Streaming audio (ex. Spotify, Pandora)</option>
                  <option value="searchEngine" label="Search engine">Search engine</option>
                  <option value="socialMedia" label='Social media'>Social media (ex. Facebook, Twitter, Instagram)</option>
                  <option value="referral" label='Referral'>Referral</option>
                  <option value="email" label='Email'>Email</option>
                  <option value="newsletter" label='Newsletter'>Newsletter</option>
                  <option value="advertisement" label='Advertisement'>Advertisement</option>
                  <option value="other" label='Other'>Other</option>
                </select>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>
        <div className='flex box-border m-0 min-w-0 grid-rows-footer flex-col gap-0'>
          <div className="box-border m-0 min-w-0 bg-white rounded-md p-8 w-full flex flex-col">
            <div className="box-border m-0 min-w-0 grid gap-8">
              <div className="flex box-border items-center my-0 max-[0.5rem] min-w-0 gap-2">
                <div className="box-border items-center gap-3 m-0 w-full text-right">
                  <Link href={""} className="flex relative items-center">
                    <button
                      type="button"
                      className="box-border bg-gradient-to-r from-purple-800 to-purple-950 appearance-none text-start no-underline border-none cursor-pointer select-none flex items-center justify-center relative m-0 px-4 py-2 line-clamp-1 font-sans font-bold rounded-md transition-all duration-200 ease-in-out w-full min-h-[2.75rem] text-xs text-white"
                      onClick={handlePostSubmit}
                    >
                      <span className="flex justify-center items-center">
                        <span>Continue</span>
                        <MdKeyboardArrowRight />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Post;