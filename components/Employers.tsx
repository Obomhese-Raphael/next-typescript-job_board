import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Employers = () => {
    return (
        <section className='bg-gray-50'>
            <div className="container mx-auto px-4 pt-2 pb-5 md:px-8 md:pt-24">
                <div className="mb-12 md:pt-10 mx-auto md:mb-16 xl:flex xl:justify-between">
                    <div className="md:max-w-sm px-4">
                        <p className='mb-3 text-sm font-medium text-primary-button md:text-base'>
                            For Employers
                        </p>
                        <h2 className='mb-3 text-2xl font-medium text-gray-900 md:mb-4 md:text-3xl'>
                            Hire talented employees
                        </h2>
                        <p className='text-sm text-gray-600 md:mb-16 md:text-xs xl:mb-0'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
                            delectus provident asperiores quas aperiam, nostrum accusamus
                            sapiente aliquam adipisci beatae magnam. Minus possimus maiores,
                            accusantium fugit iusto quibusdam facilis fugiat.
                        </p>
                        <button
                            className='gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-primary-700 text-white hover:bg-primary-800 text-sm py-3 px-5 hidden min-w-max mt-4 xl:block'
                        >
                            <Link href="/">Create Company Profile</Link>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-6 overflow-x-auto sm:px-4 md:-mx-4 md:flex md:gap-8 md:px-8 md:pb-24 xl:grid-cols-3 xl:gap-4 xl:pb-0">
                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-all ease-in-out md:p-6 md:hover:shadow-lg cursor-pointer overflow-hidden px-6 py-8 md:w-72">
                            <div className="relative -mx-6 -mt-8 md:-mx-8 bg-[url('https://cdn-images.himalayas.app/gradient-bg-01.jpg')]">
                                <div className="absolute inset-0 bg-feature-card-gradient"></div>
                                <Image
                                    src="https://cdn-images.himalayas.app/feature-card-one.webp"
                                    alt="create a free company profile"
                                    loading="lazy"
                                    width={768}
                                    height={528}
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                                <div className="absolute inset-x-0 bottom-0 w-full h-20 bg-gradient-to-b from-transparent to-white"></div>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <h3 className="mb-2 mt-4 font-medium text-gray-900 md:mt-5 md:text-lg text-lg">
                                    Create a new company profile
                                </h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-8">
                                Use your company profile to tell your story, build up your remote brand, and
                                recruit the best. Job seekers come to us to research and discover remote
                                companies.
                            </p>
                            <button className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-primary-button hover:bg-primary text-white text-sm py-3 px-5 min-w-full">
                                <Link href="/">Create Company Profile</Link>
                            </button>
                        </div>
                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-all ease-in-out md:p-6 md:hover:shadow-lg cursor-pointer overflow-hidden px-6 py-8 md:w-72">
                            <div className="relative -mx-6 -mt-8 md:-mx-8 bg-[url('https://cdn-images.himalayas.app/gradient-bg-01.jpg')]">
                                <div className="absolute inset-0 bg-feature-card-gradient"></div>
                                <Image
                                    src="https://cdn-images.himalayas.app/feature-card-two.webp"
                                    alt="Sophisticated jobs listing"
                                    loading="lazy"
                                    width={768}
                                    height={528}
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                                <div className="absolute inset-x-0 bottom-0 w-full h-20 bg-gradient-to-b from-transparent to-white"></div>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <h3 className="mb-2 mt-4 font-medium text-gray-900 md:mt-5 md:text-lg text-lg">
                                    Sophisticated jobs listing available
                                </h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-8">
                                Specify time zone, visa, and skill requirements and get in front of the most
                                relevant candidates. Promote your jobs to the world&apos;s best remote talent.
                            </p>
                            <button className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-primary-button hover:bg-primary text-white text-sm py-3 px-5 min-w-full">
                                <Link href="/">Post a job</Link>
                            </button>
                        </div>
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-all ease-in-out md:p-6 md:hover:shadow-lg cursor-pointer overflow-hidden px-6 py-8 md:w-72">
                        <div className="relative -mx-6 -mt-8 md:-mx-8 bg-[url('https://cdn-images.himalayas.app/gradient-bg-01.jpg')]">
                            <div className="absolute inset-0 bg-feature-card-gradient"></div>
                            <Image
                                src="https://cdn-images.himalayas.app/feature-card-three.webp"
                                alt="Share tech stack and culture"
                                loading="lazy"
                                width={768}
                                height={528}
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                            <div className="absolute inset-x-0 bottom-0 w-full h-20 bg-gradient-to-b from-transparent to-white"></div>
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <h3 className="mb-2 mt-4 font-medium text-gray-900 md:mt-5 md:text-lg text-lg">
                                Share tech stack and culture
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-8">
                            Showcase your tech stack, company culture, perks and benefits, and more. We&apos;ll
                            help you tell your story to make sure you attract the best talent.
                        </p>
                        <button className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-primary-button hover:bg-primary text-white text-sm py-3 px-5 min-w-full">
                            <Link href="/">Showcase brand</Link>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Employers