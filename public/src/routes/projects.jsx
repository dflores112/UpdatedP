import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <main style={{ padding: '1rem 0' }}>

      <Link className="hover:rounded-full hover:bg-amber-500 text-center p-4 cursor-pointer" to="/">Home</Link>
      <div className="px-36 mt-18 flex justify-between mb-8">

        <div className="mr-8 card">
          <div className="mb-6">
            <img src="https://lookeducation.com.au/wp-content/uploads/image-insights-marketing-strategies-2020.jpg" className="object-contain rounded h-56" />
          </div>
          <div className="text-white flex flex-col">
            <div className="mb-2 text-4xl font-extrabold card-title">
              Project 1
            </div>
            <p className="card-description leading-5 tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="mr-8 card">
          <div className="mb-6">
            <img src="https://lookeducation.com.au/wp-content/uploads/image-insights-marketing-strategies-2020.jpg" className="object-contain rounded h-56" />
          </div>
          <div className="text-white flex flex-col">
            <div className="mb-2 text-4xl font-extrabold card-title">
              Project 2
            </div>
            <p className="card-description leading-5 tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="mr-8 card">
          <div className="mb-6">
            <img src="https://lookeducation.com.au/wp-content/uploads/image-insights-marketing-strategies-2020.jpg" className="object-contain rounded h-56" />
          </div>
          <div className="text-white flex flex-col">
            <div className="mb-2 text-4xl font-extrabold card-title">
              Project 3
            </div>
            <p className="card-description leading-5 tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>



      </div>
    </main>
  );
}
