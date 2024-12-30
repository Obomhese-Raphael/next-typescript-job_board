/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Link from 'next/link';
import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { IoFilter } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiSealCheckFill } from "react-icons/pi";
import Image from 'next/image';
import ResultsProps from '@/types';
import { MdPeopleOutline } from "react-icons/md";
import { IoStarOutline, IoStar } from "react-icons/io5";
import { toast } from 'react-toastify';
import { useRouter, useSearchParams } from 'next/navigation';

const Jobs = () => {
    const jsonData = require("../../test_2.json");
    const [results, setResults] = useState<ResultsProps[]>([]);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [displayedJson, setDisplayedJson] = useState(10);
    const [jsonLength, setJsonLength] = useState(10);
    const [input, setInput] = useState("");
    const [filteredJson, setFilteredJson] = useState([]);
    const [locationInput, setLocationInput] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchTerm = searchParams?.get('searchTerm');
    const handleJsonLength = () => {
        setJsonLength(jsonLength + 10);
        setDisplayedJson(Math.min(displayedJson + 10, jsonData.length));
    }
    const handleStarClick = (itemId: number) => {
        if (selectedItems.includes(itemId)) {
            // Remove item from selectedItems
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
            toast.info("Job removed from favorites");
        } else {
            // Add item to selectedItems
            setSelectedItems([...selectedItems, itemId]);
            toast.success("Job added to favorites")
        }
    };

    const handleSearch = useCallback(() => {
        const filteredResults = jsonData.filter((job: { title: string; locations_derived: string[]; }) =>
            job.title.toLowerCase().includes(input.toLowerCase()) &&
            job.locations_derived.some((location: string) =>
                location.toLowerCase().includes(locationInput.toLowerCase())
            )
        );
        setFilteredJson(filteredResults);
    }, [input, jsonData, locationInput]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);
        handleSearch();
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLocationInput(value);
        handleSearch();
    };

    const handleJobClick = (item: { id: any }) => {
        router.push(`/jobs/${item.id}`);
    };

    useEffect(() => {
        if (searchTerm) {
            setInput(searchTerm as string);
            handleSearch();
        }
    }, [searchTerm, handleSearch]);

    return (
        <Suspense fallback={<div>Loading jobs...</div>}>
            <div>
                <div className="bg-gray-100">
                    <div className="container mx-auto px-4 w-5/6 pt-16 md:px-8">
                        <h1 className="mb-3 text-3xl font-medium text-gray-900 md:mb-5 md:text-3xl">Exciting Jobs For You</h1>
                        <p className='mb-8 text-gray-700 md:text-sm xl:mb-10 '>Discover the best jobs and work at top rated companies...</p>
                        <div className="flex w-full flex-col">
                            <div className="mb-6 flex w-full flex-col xl:mb-12 ">
                                <div className="flex flex-col gap-y-3 xl:flex-row xl:gap-x-px">
                                    <div className="bg-popover text-popover-foreground flex w-full flex-col rounded-md relative overflow-visible">
                                        <label htmlFor="" style={{ position: "absolute", width: "1px", height: "1px", padding: "0px", margin: "-1px", overflow: "hidden", clip: "rect(0px, 0px, 0PiX, 0px)", whiteSpace: "nowrap", borderWidth: "0px" }}>Job title or skill</label>
                                        <div className="relative w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-[2.625rem] pr-3.5 shadow-xs outline-none xl:rounded-none xl:border-none xl:py-[1.025rem] text-center items-center xl:pl-15 xl:text-lg xl:shadow-none xl:focus-within:ring-0 flex">
                                            <div className='w-full flex flex-nowrap items-center gap-1 overflow-hidden justify-between'>
                                                <div className="flex gap-1">
                                                    <CiSearch />
                                                    <input
                                                        type="text" className='peer text-xs flex-1 outline-none text-black'
                                                        onChange={handleInputChange}
                                                        placeholder='Job Title or skills'
                                                        value={input}
                                                    />
                                                </div>
                                                <MdOutlineKeyboardArrowDown />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-popover text-popover-foreground flex w-full flex-col rounded-md relative overflow-visible">
                                        <label htmlFor="" style={{ color: "black", position: "absolute", width: "1px", height: "1px", padding: "0px", margin: "-1px", overflow: "hidden", clip: "rect(0px, 0px, 0PiX, 0px)", whiteSpace: "nowrap", borderWidth: "0px" }}>Country or Timezone</label>
                                        <div className="relative w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-[2.625rem] pr-3.5 shadow-xs outline-none xl:rounded-none xl:border-none xl:py-[1.025rem] items-center xl:pl-15 xl:text-lg xl:shadow-none xl:focus-within:ring-0 flex">
                                            <div className='w-full flex flex-nowrap items-center gap-1 overflow-hidden justify-between'>
                                                <div className='gap-1 flex'>
                                                    <CiSearch />
                                                    <input
                                                        type="text"
                                                        className='peer text-xs flex-1 bg-transparent outline-none'
                                                        placeholder='Country or timezone'
                                                        onChange={handleLocationChange}
                                                        value={locationInput}
                                                    />
                                                </div>
                                                <MdOutlineKeyboardArrowDown />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-1 flex h-min items-center xl:mt-0 xl:bg-white xl:px-4 xl:py-[.16rem]">
                                        <span className='gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:outline-none h-max text-gray-600 active:ring-0 focus:ring-0 focus:bg-gray-50 px-4 py-2.5 -ml-4 hidden text-sm xl:inline-flex'>Clear</span>
                                        <button
                                            className='inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-2/4 border border-transparent bg-primary-700 text-white hover:bg-primary-800 disabled:bg-primary-200 focus:ring-primary-100 text-sm py-3 px-5 w-full xl:w-max'
                                            onClick={handleSearch}
                                            type='submit'
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-px hidden gap-x-4 bg-white px-5 py-4 xl:flex">
                                    <button className="inline-flex gap-x-2 font-medium items-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100 border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-100 text-xs px-7 py-2.5 justify-between">
                                        <div>Experience level</div>
                                        <div><MdOutlineKeyboardArrowDown /></div>
                                    </button>
                                    <button className="inline-flex gap-x-2 font-medium items-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100 border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-100 text-xs px-7 py-2.5 justify-between">
                                        <div>Salary Range</div>
                                        <div><MdOutlineKeyboardArrowDown /></div>
                                    </button>
                                    <button className="inline-flex gap-x-2 font-medium items-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100 border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-100 text-xs px-7 py-2.5 justify-between">
                                        <div>Companies</div>
                                        <div><MdOutlineKeyboardArrowDown /></div>
                                    </button>
                                    <button className="inline-flex gap-x-2 font-medium items-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100 border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-100 text-xs px-7 py-2.5 justify-between">
                                        <div>Job Type</div>
                                        <div><MdOutlineKeyboardArrowDown /></div>
                                    </button>
                                    <button className="inline-flex gap-x-2 font-medium items-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100 border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-100 text-xs px-7 py-2.5 justify-between">
                                        <div>Market</div>
                                        <div><MdOutlineKeyboardArrowDown /></div>
                                    </button>
                                    <button className="inline-flex gap-x-2 font-medium items-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100 border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-100 text-xs px-7 py-2.5 justify-between">
                                        <div>Employee Benefit</div>
                                        <div><MdOutlineKeyboardArrowDown /></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className='container mx-auto px-4 pb-16 pt-12 md:px-8 xl:flex xl:flex-row xl:gap-x-6 xl:pb-24 xl:pt-16'>
                        <div className='w-full justify-between'>
                            <div className="mb-4 flex flex-row items-center justify-between">
                                <div className="flex items-center gap-x-1 rounded-lg border border-gray-100 bg-gray-50 p-1">
                                    <Link
                                        className='inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max text-sm bg-white shadow-sm text-gray-700 hover:bg-gray-50 focus:ring-gray-100 px-3 py-[0.4375rem]'
                                        href={"/"}
                                    >Jobs
                                        <div className='inline-flex items-center border rounded-md font-medium w-max h-max text-xs px-2 py-0.5 ml-2 bg-white'>
                                            {results.length > 0 && results.length || jsonLength}
                                        </div>
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className='inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max text-sm text-gray-700 hover:bg-gray-50 hover:shadow-sm focus:ring-gray-100 focus:bg-white  px-3 py-[0.4375rem]'
                                    >Matches
                                        <div className='inline-flex items-center border rounded-md font-medium w-max h-max text-xs px-2 py-0.5 ml-2 bg-white'>
                                            0
                                        </div>
                                    </Link>
                                    <Link href={"/"} className='inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max text-sm text-gray-700 hover:bg-gray-50 hover:shadow-sm focus:ring-gray-100 focus:bg-white  px-3 py-[0.4375rem]'>
                                        Saved
                                        <div className="inline-flex items-center border rounded-md font-medium w-max h-max text-xs px-2 py-0.5 ml-2 bg-white">0</div>
                                    </Link>
                                </div>
                                <div>
                                    <button className="group items-center justify-between rounded-md border border-gray-200 bg-transparent px-3 py-2.5 shadow-xs  data-[placeholder]:text-gray-500 data-[state=open]:outline-none hidden xl:inline-flex text-xs m-auto">
                                        <div className="flex w-[9.625rem] items-center gap-x-2 whitespace-nowrap justify-between">
                                            <div className='flex flex-row gap-2 items-center'>
                                                <IoFilter />
                                                <span style={{ pointerEvents: "none" }}>Most relevant</span>
                                            </div>
                                            <div>
                                                <MdOutlineKeyboardArrowDown />
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-col gap-y-4 border-b border-gray-200 pb-4 xl:w-[50.5rem] group-has-[[data-pending]]/pending:hidden flex">
                                {
                                    (results.length > 0 ? results : filteredJson.length > 0 ? filteredJson : jsonData.slice(0, displayedJson))
                                        .map((item: any, index: React.Key | null | undefined) => (
                                            <Link
                                                href={`/jobs/${item.id}`}
                                                key={index}
                                                onClick={() => handleJobClick(item)}
                                            >
                                                <article
                                                    className="flex flex-shrink-0 cursor-pointer flex-col items-start gap-x-5 rounded-xl border border-primary-400 bg-white p-5 shadow-xs transition-shadow backface-hidden hover:shadow-xl md:flex-row md:p-6"
                                                >
                                                    <div className="mb-4 flex w-full flex-row justify-between md:w-max">
                                                        <span className="relative inline-block h-12 w-12 flex-shrink-0 flex-grow-0 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-full after:border after:border-gray-900 after:border-opacity-10 after:shadow-xs text-xs">
                                                            <Image
                                                                alt=""
                                                                src={"/assets/unavailable.jpg"}
                                                                width={100}
                                                                height={100}
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="w-full flex-1">
                                                        <div className="mb-2 flex justify-between gap-x-4">
                                                            <Link href={item.url} className="text-sm font-medium text-gray-900 md:w-112 md:truncate">
                                                                <span>
                                                                    {item.title}
                                                                </span>
                                                            </Link>
                                                            <span className="hidden text-xs flex-shrink-0 text-gray-600 md:block">
                                                                {item.date_posted}
                                                            </span>
                                                        </div>
                                                        <div className="mb-6 flex flex-col flex-wrap gap-y-2 md:flex-row md:gap-x-4">
                                                            <div className="flex gap-x-4">
                                                                <Link
                                                                    href={item.organization_url}
                                                                    className="inline-flex text-xs items-center font-medium text-gray-900 gap-2"
                                                                >
                                                                    {item.organization}
                                                                    <button className="text-blue-700">
                                                                        <PiSealCheckFill />
                                                                    </button>
                                                                </Link>
                                                                {item.linkedin_org_size && (
                                                                    <p className="inline-flex text-xs items-center text-gray-600 gap-2">
                                                                        <MdPeopleOutline />
                                                                        <span className="sr-only text-xs">Employee count:</span>
                                                                        {item.linkedin_org_size}
                                                                    </p>
                                                                )}
                                                            </div>
                                                            <div className="flex items-center justify-between gap-3">
                                                                <div className="flex text-xs flex-wrap gap-2">
                                                                    <div className="inline-flex items-center border rounded-md font-medium w-max h-max text-xs px-2 py-0.5">
                                                                        {item.employment_type?.[0] || "Unknown"}
                                                                    </div>
                                                                    <Link
                                                                        href={item.organization_url}
                                                                        className="inline-flex items-center border rounded-md font-medium w-max h-max text-xs px-2 py-0.5 bg-white hover:bg-gray-50"
                                                                    >
                                                                        <span className="max-w-[11.25rem] truncate">
                                                                            {item.linkedin_org_industry || item.cities_derived?.[0] || "N/A"}
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <span className="sr-only">Sign up to save this job</span>
                                                                    {selectedItems.includes(item.id) ? (
                                                                        <IoStar
                                                                            className="text-yellow-500"
                                                                            onClick={() => handleStarClick(item.id)}
                                                                        />
                                                                    ) : (
                                                                        <IoStarOutline onClick={() => handleStarClick(item.id)} />
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </Link>

                                        ))
                                }

                                <button
                                    className='inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-primary-700 text-white hover:bg-primary-800 disabled:bg-primary-200 focus:ring-primary-100 text-sm py-3 px-5 w-full'
                                    onClick={handleJsonLength}
                                >
                                    Show More
                                </button>
                            </div>
                        </div>
                        <div className=" flex-col gap-y-6 group-has-[[data-pending]]/pending:flex gap-5 right-0">
                            <div className="w-100% rounded-xl bg-gray-50 p-6">
                                <div className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100 border border-gray-200 shadow-xs bg-white text-gray-700 focus:ring-gray-100 p-3 mb-5 hover:bg-white hover:text-gray-700">
                                    <CiSearch />
                                </div>
                                <h2 className="mb-1 text-sm font-medium text-gray-900">Find your dream job</h2>
                                <p className="mb-5 text-gray-600 text-xs">Create a profile and we&apos;ll match you with the relevant jobs for free</p>
                                <div className='mb-6'>
                                    <div className="mb-3 flex flex-row items-center gap-2">
                                        <PiSealCheckFill className='text-purple-900' />
                                        <p className='text-gray-600 text-xs'>Share your job status</p>
                                    </div>
                                    <div className="mb-3 flex flex-row items-center gap-2">
                                        <PiSealCheckFill className='text-purple-900' />
                                        <p className='text-gray-600 text-xs'>Showcase your skills beyond a resume</p>
                                    </div>
                                    <div className="mb-3 flex flex-row items-center gap-2">
                                        <PiSealCheckFill className='text-purple-900' />
                                        <p className='text-gray-600 text-xs'>Get discovered by top companies</p>
                                    </div>
                                    <div className="mb-3 flex flex-row items-center gap-2">
                                        <PiSealCheckFill className='text-purple-900' />
                                        <p className='text-gray-600 text-xs'>Set salary expectations upfront</p>
                                    </div>
                                    <div className="mb-3 flex flex-row items-center gap-2">
                                        <PiSealCheckFill className='text-purple-900' />
                                        <p className='text-gray-600 text-xs'>Automatically discover relevant roles</p>
                                    </div>
                                </div>
                                <button className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-primary-700 text-white hover:bg-primary-800 disabled:bg-primary-200 focus:ring-primary-100 text-sm py-3 px-5 w-full">Sign up for free</button>
                            </div>
                            <div className="my-5"></div>
                            <div className="w-100% rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-all ease-in-out md:p-6 flex cursor-default flex-col gap-y-6 md:hover:shadow-none">
                                <h2 className="mb-0 mt-0 text-lg font-medium text-gray-900 md:text-xl">Related Searches</h2>
                                <div className='flex text-xs flex-col gap-y-4'>
                                    <Link href="" className='group flex items-center justify-between'>
                                        <span className='truncate md:max-w-[256px]'>Communication Skills</span>
                                    </Link>
                                    <Link href="" className='group flex items-center justify-between'>
                                        <span className='truncate md:max-w-[256px]'>Process Improvements</span>
                                    </Link>
                                    <Link href="" className='group flex items-center justify-between'>
                                        <span className='truncate md:max-w-[256px]'>Problem Solving</span>
                                    </Link>
                                    <Link href="" className='group flex items-center justify-between'>
                                        <span className='truncate md:max-w-[256px]'>API Integration</span>
                                    </Link>
                                    <Link href="" className='group flex items-center justify-between'>
                                        <span className='truncate md:max-w-[256px]'>Details Orientation</span>
                                    </Link>
                                    <Link href="" className='group flex items-center justify-between'>
                                        <span className='truncate md:max-w-[256px]'>SEO</span>
                                    </Link>
                                    <Link href="" className='group flex items-center justify-between'>
                                        <span className='truncate md:max-w-[256px]'>Entry Level digital marketing specialist</span>
                                    </Link>
                                    <Link href="" className='group flex items-center justify-between'>
                                        <span className='truncate md:max-w-[256px]'>Marketing</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Suspense>
    )
}

export default Jobs