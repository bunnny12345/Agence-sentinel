"use client";
import Image from "next/image";
export default function HeroSection() {
    return (
        <div className="w-full bg-white px-4 lg:px-24 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Side */}
            <div className="flex-1 space-y-6">
                <div className="space-y-2">
                    <div className="relative inline-block">
                        {/* Skewed Blue Highlight Background */}
                        <div className="absolute left-0 bottom-1 h-4 w-full bg-[#809DFF] -z-10 skew-y-[-3deg] rounded-sm" />

                        {/* Main Heading Text */}
                        <p className="text-black text-3xl font-bold leading-[57.60px] relative z-10">
                            Protecting What You Value.
                        </p>
                    </div>


                    <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                        Preserving Where You Live
                    </h1>
                    <p className="text-black font-normal text-[20px] leading-[33.6px] tracking-[-0.144px]">
                        Looking for reliable security guards or professional housekeeping staff? We connect you with trusted, trained, and verified personnel for your home, mall, apartment, hotel, or workplace.
                    </p>
                </div>

                <div className="flex gap-4 pt-2">
                    <button className="bg-[#A8BDFF] text-black font-semibold px-6 py-3 rounded-full shadow-[0px_5px_50px_0px_rgba(0,0,0,0.20)] inline-flex justify-center items-center gap-2.5 ">
                        Our Services
                    </button>
                    <button className="bg-[#D6E0FF] text-black font-semibold px-6 py-3 rounded-full shadow-[0px_5px_50px_0px_rgba(0,0,0,0.20)] inline-flex justify-center items-center gap-2.5">
                        Get in touch
                    </button>
                </div>

                <div className="flex gap-4 pt-6 flex-wrap text-black font-medium text-[20px] leading-[33.6px] tracking-[-0.12px] h-1117px">
                    <div className="inline-flex flex-col items-start justify-center gap-2 rounded-md bg-[#FCFDFF] p-2.5 px-5 py-2.5 shadow-[0_4px_6px_0_rgba(0,0,0,0.25)]">
                        <img src="assets/Trading pattern user.svg" alt="Trading pattern user" />
                        <p className="font-semibold text-sm">Verified & Trained</p>
                    </div>
                    <div className="inline-flex flex-col items-start justify-center gap-2 rounded-md bg-[#FCFDFF] p-2.5 px-5 py-2.5 shadow-[0_4px_6px_0_rgba(0,0,0,0.25)]">
                        <img src="assets/Startup Product Rocket Box.svg" alt="Startup Product Rocket" />
                        <p className="font-semibold text-sm">Quick Response</p>
                    </div>
                    <div className="inline-flex flex-col items-start justify-center gap-2 rounded-md bg-[#FCFDFF] p-2.5 px-5 py-2.5 shadow-[0_4px_6px_0_rgba(0,0,0,0.25)]">
                        <img src="assets/Trading Pattern User.svg" alt="Trading Pattern User" />
                        <p className="font-semibold text-sm">Transparent Pricing</p>
                    </div>
                </div>
            </div>
            {/* Right Side */}
            <div className="flex-1 flex flex-col items-center justify-start relative">
                {/* Security Guard Image with Frame */}
                <div
                    className="inline-flex h-[687px] p-6 items-center gap-2.5 flex-shrink-0 rounded-[36px] bg-[#FCFDFF] shadow-md z-20"
                >
                    <Image
                        src="/assets/securityguard.jpg"
                        alt="Security Guard"
                        width={300}
                        height={600}
                        className="rounded-[24px] object-cover"
                    />
                </div>

                {/* CCTV Image - behind security guard */}
                <Image
                    src="/assets/cctvcameraphoto.jpg"
                    alt="CCTV Camera"
                    width={200}
                    height={200}
                    className="absolute top-[130px] left-[20px] rounded-xl object-cover z-10"
                />

                {/* Mercedes Logo Image - below both */}
                <Image
                    src="/assets/mercedes logo.jpg"
                    alt="Mercedes Logo"
                    width={130}
                    height={130}
                    className="mt-8 rounded-xl object-cover z-10"
                />

                {/* Green Box with Human Resource Icon */}
                <div className="absolute top-[440px] left-[-30px] bg-[#00C67A] text-white text-sm font-medium px-4 py-2 rounded-full inline-flex items-center gap-2 z-30 shadow-md">
                    <Image
                        src="/assets/Human Resources Employee.svg"
                        alt="HR Icon"
                        width={20}
                        height={20}
                    />
                    <span>Local & Reliable Manpower</span>
                </div>
            </div>
        </div>
    );
}