import Image from 'next/image';
import React from 'react';
import { MdArrowForward } from "react-icons/md";
import "../styles/Diff.css";
import Employers from './Employers';
import Link from 'next/link';

const Diff = () => {
    return (
        <div className='container diff m-auto'>
            <div className="diff-container flex flex-row text-center mt-20 mb-10 justify-center items-center gap-0 ">
                <div className="logo-wrapper">
                    <Image
                        src={"/assets/glassdoor_logo.png"}
                        alt='glassdoor_logo'
                        width={35}
                        height={20}
                        className='rounded-full'
                    />
                </div>
                <div className="logo-wrapper">
                    <Image
                        src={"/assets/linkedln_logo.webp"}
                        alt='linkedln_logo'
                        width={45}
                        height={30}
                        className='rounded-full'
                    />
                </div>
                <div className="logo-wrapper jobberman">
                    <Image
                        src={"/assets/jobberman_logo.webp"}
                        alt='jobberman_logo'
                        width={35}
                        height={30}
                        className='rounded-full'
                    />
                </div>
                <p className='text-base flex items-center mx-2'>
                    Find a job <MdArrowForward />
                </p>
            </div>
            <div className='flex flex-row justify-between mx-14'>
                <div className="left">
                    <h3 className='text-3xl font-bold mb-2'>Explore 40,000+ remote job opportunities</h3>
                    <p className='text-xs text-gray-500'>Personalized filters make it quick and easy to find the jobs you care about.</p>
                </div>
                <div className="right">
                    <button className='font-sans text-xs'><Link href="/jobs">Search Jobs</Link></button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3 mx-16 my-10">
                <a href="">
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-all ease-in-out md:p-6 md:hover:shadow-lg">
                        <div className="flex flex-wrap justify-between">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full md:h-12 md:w-12 bg-blue-100">
                                <Image
                                    src={"/assets/coding_2.webp"}
                                    alt='coding'
                                    width={20}
                                    height={20}
                                    className='rounded-full'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col mt-2'>
                            <h3 className='text-sm font-medium mb-2'>Software Development</h3>
                            <p className='text-gray-500 text-xs'>Get awesome well paying developer job - <span className='font-semibold'>Fullstack Developer, Andriod or IOS Developer Jobs</span></p>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-all ease-in-out md:p-6 md:hover:shadow-lg">
                        <div className="flex flex-wrap justify-between">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full md:h-12 md:w-12 bg-blue-100">
                                <Image
                                    src={"/assets/sales_icon.png"}
                                    alt='sales'
                                    width={20}
                                    height={20}
                                    className='rounded-full'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col mt-2'>
                            <h3 className='text-sm font-medium mb-2'>Sales Jobs</h3>
                            <p className='text-gray-500 text-xs'>Get awesome well paying sales job - <span className='font-semibold'>Sales Manager, Sales Representative, Sales Engineer Jobs</span></p>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-all ease-in-out md:p-6 md:hover:shadow-lg">
                        <div className="flex flex-wrap justify-between">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full md:h-12 md:w-12 bg-blue-100">
                                <Image
                                    src={"/assets/product_icon.png"}
                                    alt='product_icon'
                                    width={20}
                                    height={20}
                                    className='rounded-full'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col mt-2'>
                            <h3 className='text-sm font-medium mb-2'>Product Management Jobs</h3>
                            <p className='text-gray-500 text-xs'>Get awesome well paying product management job - <span className='font-semibold'>Product Manager, Product Designer, Product Owner Jobs</span></p>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-all ease-in-out md:p-6 md:hover:shadow-lg">
                        <div className="flex flex-wrap justify-between">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full md:h-12 md:w-12 bg-blue-100">
                                <Image
                                    src={"/assets/marketing_icon.png"}
                                    alt='marketing_icon'
                                    width={20}
                                    height={20}
                                    className='rounded-full'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col mt-2'>
                            <h3 className='text-sm font-medium mb-2'>Marketing Jobs</h3>
                            <p className='text-gray-500 text-xs'>Get awesome well paying marketing job - <span className='font-semibold'>Marketing Manager, Marketing Specialist, Advertising Jobs</span></p>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-all ease-in-out md:p-6 md:hover:shadow-lg">
                        <div className="flex flex-wrap justify-between">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full md:h-12 md:w-12 bg-blue-100">
                                <Image
                                    src={"/assets/design_icon.png"}
                                    alt='design_icon'
                                    width={20}
                                    height={20}
                                    className='rounded-full'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col mt-2'>
                            <h3 className='text-sm font-medium mb-2'>Design Jobs</h3>
                            <p className='text-gray-500 text-xs'>Get awesome well paying design job - <span className='font-semibold'>UX/UI Designer, Graphic Designer, UI/UX Engineer Jobs</span></p>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-all ease-in-out md:p-6 md:hover:shadow-lg">
                        <div className="flex flex-wrap justify-between">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full md:h-12 md:w-12 bg-blue-100">
                                <Image
                                    src={"/assets/finance_icon.png"}
                                    alt='finance_icon'
                                    width={20}
                                    height={20}
                                    className='rounded-full'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col mt-2'>
                            <h3 className='text-sm font-medium mb-2'>Finance Jobs</h3>
                            <p className='text-gray-500 text-xs'>Get awesome well paying finance job - <span className='font-semibold'>Finance Manager, Finance Analyst, Accountant Jobs</span></p>
                        </div>
                    </div>
                </a>
            </div>
            <div className='mx-auto'>
                <Employers />
            </div>
        </div>
    )
}

export default Diff;