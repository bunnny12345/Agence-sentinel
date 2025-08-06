"use client";
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
                    <p className="text-gray-600 text-sm lg:text-base max-w-md">
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

                <div className="flex gap-4 pt-6 flex-wrap">
                    <div className="bg-white border rounded-xl shadow-sm px-4 py-3 text-center w-[150px]">
                        <p className="font-semibold text-sm">✅ Verified & Trained</p>
                    </div>
                    <div className="bg-white border rounded-xl shadow-sm px-4 py-3 text-center w-[150px]">
                        <p className="font-semibold text-sm">⚡ Quick Response</p>
                    </div>
                    <div className="bg-white border rounded-xl shadow-sm px-4 py-3 text-center w-[150px]">
                        <p className="font-semibold text-sm">💰 Transparent Pricing</p>
                    </div>
                </div>
            </div>
        </div>
    );
}