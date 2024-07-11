import React from "react";
import Image from "next/image";
import '../../../public/test.css'
import SectionWrapper from "@/app/components/SectionWrapper";
import ArrowRight from '../../../public/images/Rectangle 1.svg'

export default function ContactForm() {
    return (
        <SectionWrapper>
            <div className="flex flex-col gap-8">
                <h2 className="w-full text-3xl text-[#ffffff]">Talk to us about <span className="text-[#1A9FFF]">your project</span></h2>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="full-name" className="w-full text-lg text-[#ffffff] font-semibold ">
                            Full Name
                        </label>
                        <input id="full-name" type="text" className="focus:outline-none focus:ring focus:ring-violet-400 pl-4 py-3 bg-gradient-to-r from-[#292929] to-[#00111d] border border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="w-full text-lg text-[#ffffff] font-semibold ">
                            Email
                        </label>
                        <input id="email" type="text" className="focus:outline-none focus:ring focus:ring-violet-400 pl-4 py-3 bg-gradient-to-r from-[#292929] to-[#00111d] border border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="project-message" className="w-full text-lg text-[#ffffff] font-semibold ">
                            Services you are interested in
                        </label>
                        <select className="focus:outline-none focus:ring focus:ring-violet-400 px-4 py-3 bg-gradient-to-r from-[#292929] to-[#00111d] border border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal">
                            <option className="bg-[#292929] text-[#eeeeee]" disabled selected>Select a service</option>
                            {webDevelopmentServices.map(service => (
                                <option
                                    key={service.id}
                                    className="bg-[#292929] text-[#eeeeee] hover:bg-[#333333]"
                                    value={service.id}
                                >
                                    {service.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="project-message" className="w-full text-lg text-[#ffffff] font-semibold ">
                            About your project
                        </label>
                        <textarea id="project-message" rows={6} className="focus:outline-none focus:ring focus:ring-violet-400 pl-4 py-3 bg-gradient-to-r from-[#292929] to-[#00111d] border border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal" />
                    </div>
                    <div className="w-full flex justify-center pt-2">
                        <button className="w-full flex items-center justify-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] rounded-full text-xl">
                            <Image src={ArrowRight} alt="hero_image"  />
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </SectionWrapper>
    )
}

export const webDevelopmentServices = [
    {
        id: 1,
        title: 'Web landing page'
    },
    {
        id: 2,
        title: 'Web landing page'
    },
    {
        id: 3,
        title: 'Web landing page'
    },
    {
        id: 4,
        title: 'Web landing page'
    },
    {
        id: 5,
        title: 'Web landing page'
    },
    {
        id: 6,
        title: 'Web landing page'
    },
    {
        id: 7,
        title: 'Web landing page'
    },
    {
        id: 8,
        title: 'Web landing page'
    },
    {
        id: 9,
        title: 'Web landing page'
    },
]