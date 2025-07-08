import React, { useState } from "react";

const projects = [
  {
    title: "Vital Mega Store",
    subDescription: "Electronics & Home Appliances",
    description:
      "We boosted their sales through strategic Meta Ads targeting high-demand items. Our campaign increased store visits and conversions significantly within 3 weeks.",
    services: "Meta Ads, Sales Strategy, Audience Targeting",
  },
  {
    title: "ANB Perfumes",
    subDescription: "Perfumes & Fragrances",
    description:
      "We designed engaging ads and focused on impulse buying with cash-on-delivery offers. Daily sales and brand awareness increased across platforms.",
    services: "Meta Ads, Product Strategy, Conversion Optimization",
  },
  {
    title: "Tabreed Takyeef Gassalat",
    subDescription: "AC Repair & Maintenance (KSA)",
    description:
      "We generated high-quality leads using localized Meta & Google Ads. Focused targeting brought consistent service bookings at a low cost-per-lead.",
    services: "Meta Ads, Google Ads, Lead Form Optimization",
  },
  {
    title: "Hopscotch India",
    subDescription: "Kidswear (Under 12 Clothing)",
    description:
      "We optimized their website and ran result-driven Meta Ads to promote seasonal collections. Sales and website engagement improved noticeably.",
    services: "Website Optimization, Meta Ads, Seasonal Campaigns",
  },
];

const ProjectsPage: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <section className='px-6 md:px-12 lg:px-24'>
      <h2 className='text-2xl md:text-3xl font-bold text-center'>
        Our <span className='text-[#3768E1]'>Works</span>🧠
      </h2>
      <p className='sm:w-1/4 md:w-1/2 mx-auto my-5 text-zinc-400 text-xl text-center'>
        Real Projects. Real Results. Here's how Socdia Agency helped businesses
        grow with Meta Ads and Website Optimization.
      </p>

      <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-6'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='relative p-6 rounded-xl border border-[#3768E1] bg-transparent shadow-md hover:shadow-lg group overflow-hidden'
            onMouseMove={handleMouseMove}>
            <div
              className='absolute z-[-1] w-40 h-40 bg-[#3768E1]/30 rounded-full pointer-events-none blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              style={{
                top: pos.y - 80,
                left: pos.x - 80,
              }}
            />
            <h3 className='text-xl font-semibold text-[#3768E1] mb-2'>
              {project.title}
            </h3>
            <h3 className='text-md font-semibold mb-2'>
              <span className='text-[#3768E1] font-semibold'>Industry: </span>
              {project.subDescription}
            </h3>
            <p>{project.description}</p>
            <p className='mt-2 text-zinc-400'>
              <span className='text-[#3768E1] font-semibold'>Services: </span>
              {project.services}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ProjectsPage;
