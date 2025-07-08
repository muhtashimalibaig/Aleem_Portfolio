import React, { useState } from "react";
import { Star, StarOff } from "lucide-react";

interface IReview {
  rating: number;
}

const reviews = [
  {
    name: "Sarah Malik – Small Business Owner",
    rating: 5,
    review:
      "Socdia Agency helped me scale my online store through Meta Ads! Within 2 weeks, I started getting consistent leads. Very professional and always available for support.",
  },
  {
    name: "Ahmed Raza – Freelancer",
    rating: 4,
    review:
      "Aleem knows how to run results-driven ad campaigns. My service bookings have doubled. I recommend Socdia for anyone looking to grow online.",
  },
  {
    name: "Anam Sheikh – E-commerce Brand Owner",
    rating: 5,
    review:
      "I hired Socdia for website optimization. They improved my site speed and design, and now my bounce rate is much lower. Great work!",
  },
  {
    name: "John Thomas – Digital Product Seller",
    rating: 5,
    review:
      "What I liked most was their transparency and reporting. Socdia’s Meta Ads strategy brought in 3x ROI in just 1 month.",
  },
  {
    name: "Rabia Khan – Coach & Consultant",
    rating: 4,
    review:
      "Very easy to work with and quick turnaround! They optimized my landing page and ran high-converting ads. Happy with the results.",
  },
  {
    name: "Bilal Qureshi – Local Service Provider",
    rating: 5,
    review:
      "I worked with Socdia Agency for Meta Ads, and the results were impressive! My leads increased within days, and the team guided me throughout the process. Highly recommended for serious business growth.",
  },
];

const StarRating: React.FC<IReview> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className='flex text-yellow-400'>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={16} fill='currentColor' stroke='currentColor' />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOff key={i} size={16} />
      ))}
    </div>
  );
};

export default function Reviews() {
  return (
    <section className='px-6 md:px-12 lg:px-24 py-10'>
      <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>
        What Our <span className='text-[#3768E1]'>Clients</span> Say{" "}
        <span className='text-[#3768E1]'>:</span>
      </h2>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 '>
        {reviews.map((item, index) => (
          <ReviewCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

// Separate component for each card to manage individual mouse state
function ReviewCard({ item }: { item: (typeof reviews)[0] }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className='relative p-6 rounded-xl border border-[#3768E1] bg-transparent shadow-md hover:shadow-lg group overflow-hidden'
      onMouseMove={handleMouseMove}>
      <div
        className='absolute z-[-1] w-40 h-40 bg-[#3768E1]/30 rounded-full pointer-events-none blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        style={{
          top: pos.y - 80,
          left: pos.x - 80,
        }}
      />
      <StarRating rating={item.rating} />
      <p className='mt-4'>{item.review}</p>
      <p className='mt-4 font-semibold text-[#3768E1]'>{item.name}</p>
    </div>
  );
}
