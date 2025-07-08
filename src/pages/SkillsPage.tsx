import React from "react";
const skills = [
  {
    name: "Meta (Facebook & Instagram) Ads ",
    description: " Targeted campaigns to bring real leads and sales",
    level: 80,
  },
  {
    name: "Website Optimization ",
    description:
      "Speed, design, and mobile-friendly structure to boost conversions",
    level: 70,
  },
  {
    name: "Landing Page Design",
    description: " High-converting pages built for performance",
    level: 90,
  },
];

const SkillsPage: React.FC = () => {
  return (
    <>
      <section className='py-10 text-center'>
        <h1 className='md:text-5xl sm:text-3xl font-bold'>
          Skills and Services<span className='text-[#3768E1]'>.</span>
        </h1>
        <p className='text-zinc-400 sm:text-[14px] md:text-[18px] md:mt-5 sm:mt-3'>
          What We Offer:
        </p>

        <div className='md:px-40 sm:px-10 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 px-20'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='p-6 relative overflow-hidden bg-gray-500/20 backdrop-blur-lg rounded-lg shadow-lg text-center'>
              <div className='flex justify-center'></div>
              <h3 className='text-2xl font-bold text-white my-2'>
                {skill.name}
              </h3>
              <h3 className='text-lg font-bold text-white my-2'>
                {skill.description}
              </h3>
              <div className='w-full bg-gray-700 h-2.5 rounded-full'>
                <div
                  className='bg-[#3768E1] h-2.5 rounded-full'
                  style={{ width: `${skill.level}%` }}></div>
              </div>
              <div
                className='absolute bg-[#3768E1] top-0 w-full left-0 h-full text-2xl text-white opacity-0 hover:opacity-90 transition-opacity duration-300'
                id='progress'>
                <span className='flex flex-col justify-center font-bold items-center h-full'>
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
