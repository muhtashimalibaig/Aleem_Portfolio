import React from "react";
import circle from "../assets/circles.png";
import { Facebook, Instagram, MousePointer2 } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <>
      <section className='text-center py-10 px-5 md:px-16 lg:px-32 relative'>
        <h1 className='text-3xl md:text-4xl font-bold'>
          Let's <span className='text-[#3768E1]'>connect</span>
        </h1>
        <div className='flex flex-col lg:flex-row pt-10 gap-10 items-center lg:items-start'>
          {/* Contact Information */}
          <div className='w-full lg:w-1/2'>
            <div className='p-7 bg-[rgba(65,47,123,0.15)] text-start rounded-xl'>
              <h1 className='text-2xl font-bold mb-2'>Contact Information</h1>
              <h4 className='mb-2 text-[#3768E1]'>
                <strong className='text-zinc-400'>Email:</strong>{" "}
                hello@socdia.agency
              </h4>
              <h4 className='text-[#3768E1] mb-2'>
                <strong className='text-zinc-400'>Phone: </strong> +92 327
                6858281
              </h4>
              <p className='text-zinc-400 mb-2'>
                Reach out to me for any queries or further information. I'm here
                to help!
              </p>
              <div className='mt-10'>
                <h1 className='text-zinc-400'>
                  If You Were Really Interested Then Fill Out This Form:
                </h1>
                <a
                  target='_blank'
                  href='https://docs.google.com/forms/d/e/1FAIpQLSeRb_tsDi9rKvzrR_aSi3zq3hDThqRgz9A2RlBti9hP9pWYtg/viewform'
                  id='btn'
                  className='bg-[#3768E1] mt-5 px-6 md:px-10 py-2 md:py-3 rounded-full border text-sm md:text-base relative inline-block'>
                  <span>Click Here</span>
                  <span
                    className='absolute'
                    id='upload'
                    style={{
                      top: "50%",
                      left: "50%",
                      opacity: "0",
                      transform: "translate(-50%, -50%)",
                    }}>
                    <MousePointer2 size={32} />
                  </span>
                </a>
              </div>
              <div className='mt-5'>
                <h1 className='text-xl font-semibold'>
                  Our Social Media Links
                </h1>
                <div className='flex gap-5 lg:gap-7 mt-5'>
                  <a
                    href='https://www.facebook.com/share/1BhyjcKDrZ/'
                    target='_blank'
                    className='hover:text-[#3768E1]'>
                    <Facebook />
                  </a>
                  <a
                    href='https://www.instagram.com/socdia.agency?igsh=bGgzcGtidWh4NWV0'
                    className='hover:text-[#3768E1]'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='w-full lg:w-1/2'>
            <form action=''>
              <div className='flex flex-col md:flex-row gap-4 md:gap-10 text-start'>
                <input
                  type='text'
                  className='bg-transparent border-2 border-gray-700 outline-none rounded-md focus-within:border-[#3768E1] px-4 py-3 w-full md:w-1/2'
                  placeholder='Name'
                />
                <input
                  type='email'
                  className='bg-transparent border-2 border-gray-700 outline-none rounded-md focus-within:border-[#3768E1] px-4 py-3 w-full md:w-1/2'
                  placeholder='Email'
                />
              </div>
              <input
                type='text'
                placeholder='Subject'
                className='mt-5 w-full px-4 py-3 bg-transparent focus-within:border-[#3768E1] border-2 border-gray-700 outline-none rounded-md'
              />
              <textarea
                className='w-full mt-4 bg-transparent border-2 border-gray-700 resize-none focus-within:border-[#3768E1] outline-none p-2 rounded-md'
                placeholder='Message'
                rows={7}></textarea>
              <div className='text-start mt-3'>
                <button className='border px-10 py-3 rounded-full'>
                  Let's Talk
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Decorative Circle */}
        <div className='left-[70%] sm:hidden md:absolute top-[76%] w-[150px] md:w-[200px]'>
          <img
            src={circle}
            alt=''
            style={{ mixBlendMode: "color-dodge" }}
            id='circle'
          />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
