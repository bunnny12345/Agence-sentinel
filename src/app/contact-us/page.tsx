import React from "react";


const ContactUsPage = () => {
  return (
    <div className="bg-[#fcfdff] flex justify-center w-full">
      <div className="w-full max-w-[1728px]">
        {/* Main Background Frame */}
        <div className="relative bg-cover bg-center bg-no-repeat w-full min-h-[822px] px-[96px] py-[80px] flex flex-col"
        style = {{backgroundImage:"url('/assets/background.png.jpeg')"}}>
          <div className="absolute inset-0 bg-white opacity-85"></div>
        
          <div className="relative">
              {/* Heading */}
          <div className="relative w-fit mb-[80px]">
            <div className="absolute w-full h-[20px] top-[31px] left-0 bg-[#809dff]" />
            <h1 className="relative text-[36px] leading-[50.4px] font-[500] text-black tracking-[-0.216]">
              Contact Us
            </h1>
          </div>

          {/* Content Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
             {/* Contact Info Right */}
             <div className="flex flex-col gap-[48px] w-full max-w-[600px]">
              {/* Phone */}
              <div className="flex items-center gap-[24px]">
                <img src="/assets/phone.svg"
                alt="Phone Icon"
                 className="w-[50px] h-[50px] object-contain" />
                <div>
                  <p className="text-[#00000080] text-lg leading-[14px] tracking-[0.4px]">
                    Whatsapp No
                  </p>
                  <p className="text-black font-semibold text-xl leading-[20px] mt-3 tracking-[0.144px]">
                    +91 5454123321
                  </p>
                </div>
              </div>



              {/* Email */}
             <div className="flex items-center gap-[24px]">
                <img src="/assets/email.svg"
                alt="Email Icon"
                  className="w-[50px] h-[50px] object-contain" />
                <div>
                  <p className="text-[#00000080] text-lg leading-[14px] tracking-[0.4px]">
                    Email ID
                  </p>
                  <p className="text-black font-semibold text-xl leading-[20px] mt-3 tracking-[0.144px]">
                    support@agence sentinel.com
                  </p>
                </div>
              </div>



              {/* Address */}
                <div className="flex items-center gap-[24px]">
                 <img src="/assets/location.svg"
                alt="Address Icon"
                 className="w-[50px] h-[50px] object-contain relative -top-3" />
                <div>
                  <p className="text-[#00000080] text-lg leading-[14px] tracking-[0.4px]">
                    Address
                  </p>
                  <p className="text-black font-semibold text-xl leading-[27px] mt-3 tracking-[0.144px]">
                     N3/45 IRC Village Nayapalli,<br/> Bhubaneswar, Odisha
                  </p>
                </div>
              </div>


              
            </div> 
              {/* image */}

            <div className="flex-shrink-0 relative -top-20">
              <img
                src="/assets/contact.png" 
                alt="Contact image"
                className="w-[750px] h-auto object-contain"
              />
              {/*heart icon */}
              <img src="/assets/heart-icon.svg" alt="Icon"
              className="absolute top-[-10px] left-[130px] w-[140px] h-[132px] object-contain" />
            </div>
          </div>
        

          {/* Bottom Note */}
          <div className="mt-[-12px] text-center">
            <p className="text-black text-[20px] leading-[23.6px] tracking-[0.2px]">
              *Reach out with confidence — we are committed to reliable
              service, prompt support, and your complete safety and
              satisfaction.
            </p>
          </div>
        </div>
        </div>
    </div>
  </div>
  );
};

export default ContactUsPage;