import React from 'react';
import banner from "../images/books.jpg";

const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 md:flex my-10'>
      <div className='w-full md:w-1/2 order-2 md:order-1 md:mt-32 mt-12'>
        <div className='space-y-12'>
          <h1 className='text-4xl font-bold mt-8'>
            Palka welcomes you to enjoy book reading <span className='text-orange-500'>every day!</span>
          </h1>
          <p className='text-xl'>
            Book reading holds immense importance in both personal and intellectual development. It stimulates the mind, enhances cognitive skills, and improves concentration and focus. Reading books expands vocabulary, strengthens language skills, and fosters creativity by exposing readers to new ideas and perspectives. It also promotes empathy by allowing readers to experience diverse cultures and viewpoints, thereby broadening their understanding of the world.
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          
        </div>
        <button className="btn mt-4 mb-2 btn-active btn-primary">Secondary</button>
      </div>
      <div className='w-full md:w-1/2 order-1 md:order-2'>
        <img  src={banner} alt="Book Banner" className=' my-20 w-full h-auto md:w-92 md:h-92' />
      </div>
    </div>
  );
}

export default Banner;
