import React from "react";
import circle from "../assets/circles.png";

const AboutPage: React.FC = () => {
  return (
    <>
      <section className='overflow-hidden px-5 md:px-10 lg:px-20 pb-20 md:pb-0 relative'>
        <div className='flex flex-col lg:flex-row justify-around !items-center lg:items-start space-y-10 lg:space-y-0'>
          {/* About Me Section */}
          <div className='lg:w-1/2'>
            <h1 className='text-[#3768E1] text-3xl font-bold mb-4'>
              About Me <span className='text-white'>:</span>
            </h1>
            <p className='text-[16px] md:text-[18px] leading-relaxed'>
              <span className='text-[#3768E1] text-4xl'>"</span> <br />
              At <span className='text-[#3768E1] font-bold'>Socdia Agency</span>
              , we help businesses grow through smart, creative, and
              result-driven Meta Ads and Website Optimization. Whether you’re a
              small business, a startup, or an online store, we focus on turning
              your clicks into real customers.
              <br />
              Founded by{" "}
              <span className='text-[#3768E1] font-bold'>
                Muhammad Aleem Irfan
              </span>{" "}
              , Socdia started with a vision to simplify online marketing for
              brands that want real growth without the fluff. With a clear focus
              on performance, we create ad strategies that convert and websites
              that load fast, look professional, and keep your audience engaged.
              <br />
              We don’t believe in “one-size-fits-all.” Every business is
              different — and so is our strategy. <br />
              <p className='mt-5'>
                What We <span className='text-[#3768E1] font-bold'>Offer</span>:
                <ul>
                  <li>
                    <span className='text-[#3768E1] font-bold'>
                      {" "}
                      Meta (Facebook & Instagram) Ads
                    </span>{" "}
                    – Targeted campaigns to bring real leads and sales
                  </li>
                  <li>
                    <span className='text-[#3768E1] font-bold'>
                      {" "}
                      Website Optimization
                    </span>{" "}
                    – Speed, design, and mobile-friendly structure to boost
                    conversions
                  </li>
                  <li>
                    <span className='text-[#3768E1] font-bold'>
                      {" "}
                      Landing Page Design
                    </span>{" "}
                    – High-converting pages built for performance
                  </li>
                </ul>
              </p>
              <p className='mt-5'>
                💡<span className='text-[#3768E1] font-bold'> Why Socdia</span>?
                <br />
                <ul
                  className='grid'
                  style={{
                    gridTemplateColumns: "1fr 1fr",
                  }}>
                  <li>✅ Data-Driven Strategy </li>
                  <li>✅ Personal Attention </li>
                  <li>✅ Fast </li>
                  <li>✅ Fast Communication</li>
                  <li>✅ Affordable Packages</li>
                  <li>✅ Real Results</li>
                  <li>✅  Not Just Likes</li>
                </ul>
              </p>
              <span className='text-[#3768E1] text-4xl mt-5 inline-block'>
                "
              </span>
            </p>
          </div>

          {/* Qualifications Section */}
          <div className='lg:w-1/2'>
            <h1 className='text-[#3768E1] text-3xl font-bold mb-5'>
              Qualifications<span className='text-white'>:</span>
            </h1>
            <div className='flex flex-col space-y-5'>
              {/* Qualification Card 1 */}
              <div
                className='bg-gray-500/20 backdrop-blur-lg w-full p-6 rounded-xl'
                id='about-card'>
                <h1 className='text-2xl text-[#3768E1] font-bold mb-1'>
                  Matriculation
                </h1>
                <p>Naeem Shah Academy</p>
              </div>
              {/* Qualification Card 2 */}
              <div
                className='bg-gray-500/20 backdrop-blur-lg w-full p-6 rounded-xl'
                id='about-card'>
                <h1 className='text-2xl text-[#3768E1] font-bold mb-1'>
                  Intermediate
                </h1>
                <p>Government Islamia College, Civil Lines, Lahore.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Circle */}
        <div
          className='absolute left-[70%] md:left-[80%] top-[85%] w-[200px] md:w-[300px]'
          id='img'>
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

export default AboutPage;
