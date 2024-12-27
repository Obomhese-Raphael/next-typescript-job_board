/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

/* eslint-disable @typescript-eslint/no-require-imports */
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsSuitcaseLg } from "react-icons/bs";
import { IoLocationOutline } from 'react-icons/io5';
import { IoPersonOutline } from "react-icons/io5";
import { FaMoneyBills } from "react-icons/fa6";
import { toast } from 'react-toastify';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface JobData {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string;
    salary: string;
    job_type: string;
    linkedin_org_specialties: string[];
    company_logo: string;
    organization: string;
    cities_derived: string[];
    locations_derived: string;
    linkedin_org_industry: string;
    date_posted: string;
    linkedin_org_description: string;
    qualifications: string[];
    employment_type: string[];
}

const JobDetails = () => {
    const params = useParams();
    const id = params.id;
    const jsonData = require("../../../test_2.json");
    const jobData: JobData = jsonData.find((job: { id: { toString: () => string | string[] | undefined; }; }) => job.id.toString() === id);
    const [similarJobs, setSimilarJobs] = useState<any[]>([]);
    const [appliedJobs, setAppliedJobs] = useState<(string | number)[]>([]);

    useEffect(() => {
        // Perform logic to find similar jobs here
        const titleArray = jobData.title.split(" ");

        const intersection = jsonData.filter((item: { title: string; }) => {
            const allTitleArray = item.title.split(" ");
            return allTitleArray.some((word: string) => titleArray.includes(word));
        });

        setSimilarJobs(intersection);  // Store similar jobs in state
    }, [jobData, jsonData]);

    if (!jobData) {
        toast.error("Job not found.");
        return <></>;
    }
    const handleApplyClick = (id: string | number) => {
        if (!appliedJobs.includes(id)) {
            setAppliedJobs([...appliedJobs, id]);
            toast.success("Job applied successfully.");
        }
    };

    return (
        <div className='min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto'>
            <div className="bg-white text-black rounded-lg w-4/5 mx-auto">
                <div className="flex justify-center md:justify-between flex-wrap gap-8 px-10 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl">
                    <div className="flex flex-col md:flex-row items-center">
                        <Image
                            src="/assets/unavailable.jpg"
                            alt=""
                            className="h-16 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border"
                            width={80}
                            height={80}
                        />
                        <div className="text-center md:text-left text-neutral-700">
                            <h1 className="text-xl sm:text-2xl font-medium">{jobData.title}</h1>
                            <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                                <span className='flex text-xs items-center gap-1'
                                >
                                    <BsSuitcaseLg />
                                    {jobData.organization}
                                </span>
                                <span className='flex text-xs items-center gap-1'
                                >
                                    <IoLocationOutline />
                                    {
                                        (jobData.cities_derived && jobData.cities_derived[0]) ||
                                        (jobData.locations_derived && jobData.locations_derived[0]) ||
                                        "N/A" // Or an empty string: ""
                                    }
                                </span>
                                <span className='flex text-xs items-center gap-1'
                                >
                                    <IoPersonOutline />
                                    {jobData.linkedin_org_industry}
                                </span>
                                <span className='flex text-xs items-center gap-1'
                                >
                                    <FaMoneyBills />
                                    Compensation: $70k
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mx-auto text-end text-sm max-md:mx-auto max-md:text-center">
                        <button
                            onClick={() => handleApplyClick(jobData.id)}
                            className={`px-4 py-2 mt-2 rounded text-white ${appliedJobs.includes(jobData.id)
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                                }`}
                            disabled={appliedJobs.includes(jobData.id)}
                        >
                            <p className='text-sm'>
                                {appliedJobs.includes(jobData.id) ? 'Already Applied' : 'Apply'}
                            </p>
                        </button>
                        <p className='mt-1 text-center text-xs text-gray-600'>
                            <span>{jobData.date_posted.split(",")}</span>
                        </p>
                    </div>
                    <div className=""></div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-start mt-3">
                    <div className="w-full lg:w-2/3">
                        <h2 className='font-bold text-xl mb-4'>Job Description</h2>
                        <div className="rich-text text-xs">
                            <p className='text-gray-500 leading-5'>{jobData.linkedin_org_description}</p>
                            <h3 className='font-bold text-xl mt-4 mb-4'>Key Specialties</h3>
                            <ol>
                                <li>
                                    {jobData.linkedin_org_specialties.map((item: string | number, index: string | number) => {
                                        return <span key={index} className='flex gap-2 text-gray-500 '>
                                            <ol>{(index as number) + 1}.</ol>
                                            <ol>{item}</ol>
                                        </span>
                                    })}
                                </li>
                            </ol>
                            <h3 className='font-bold text-xl mt-4 mb-4'>Skills Requirements</h3>
                            <ol>
                                <li>
                                    {jobData.qualifications.map((item: string | number, index: string | number) => {
                                        return <span key={index} className='flex gap-2 text-gray-500 '>
                                            <ol>{(index as number) + 1}.</ol>
                                            <ol>{item}</ol>
                                        </span>
                                    })}
                                </li>
                            </ol>
                        </div>
                        <button
                            onClick={() => handleApplyClick(jobData.id)}
                            // className='bg-blue-600 p-2.5 px-10 text-white rounded mt-10'
                            className={`px-4 py-2 mt-2 rounded text-white ${appliedJobs.includes(jobData.id)
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                                }`}
                        >
                            <p className='text-sm'>
                                {appliedJobs.includes(jobData.id) ? 'Already Applied' : 'Apply Now'}
                            </p>
                        </button>
                    </div>
                    <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5">
                        <h3>Related Jobs</h3>
                        {
                            similarJobs.length > 0 ? (
                                similarJobs.slice(0, 5).map((job: JobData) => {
                                    return (
                                        <div key={job.id} className="border p-6 shadow rounded">
                                            <div className="gap-3 flex items-center">
                                                <Image
                                                    src={'/assets/unavailable.jpg'}
                                                    alt={`Logo for ${job.organization}`}
                                                    width={40}
                                                    height={40}
                                                />
                                                <h4 className="flex text-sm my-auto font-medium mt-2">{job.title}</h4>
                                            </div>
                                            <div className="flex items-center gap-3 mt-2 text-xs">
                                                <span className="bg-blue-50 border border-blue-200 px-2 text-xs py-1 rounded">{job.employment_type}</span>
                                                <span className="bg-red-50 border border-red-200 px-4 py-1.5 rounded overflow-hidden text-ellipsis whitespace-nowrap">{job.locations_derived[0]}</span>
                                            </div>
                                            <p className="text-gray-500 text-sm mt-4">
                                                <p className='overflow-hidden text-ellipsis whitespace-nowrap'>{job.linkedin_org_description}</p>
                                            </p>
                                            <div className="mt-4 flex gap-4 text-sm">
                                                <button
                                                    onClick={() => handleApplyClick(job.id)}
                                                    className={`px-4 py-2 mt-2 rounded text-white ${appliedJobs.includes(job.id)
                                                        ? 'bg-gray-400 cursor-not-allowed'
                                                        : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                                                        }`}
                                                >
                                                    <p className='text-xs'>
                                                        {appliedJobs.includes(job.id) ? 'Already Applied' : 'Apply Now'}
                                                    </p>
                                                </button>
                                                <Link href={`/jobs/${job.id}`}>
                                                    <button className="text-gray-500 border border-gray-500 rounded text-xs px-4 py-2 mt-2">Learn more</button>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails