import React from 'react';
import { Link } from 'react-router-dom';
import Projects from './projects.jsx';
import About from './about.jsx';

function App() {
  return (
    <>
      <div className="bg-black">
        <div>
          <nav className="flex justify-between px-36 pt-8">
            <div>
              <img className="h-16" alt="logo" src="https://static.vecteezy.com/system/resources/previews/003/651/260/non_2x/df-logo-monogram-with-slash-style-design-template-free-vector.jpg" />
            </div>
            <div className="flex items-center temp">
              <Link className="hover:rounded-full hover:bg-zinc-800 text-center p-4 cursor-pointer text-white" to="/projects">Projects</Link>
              <Link className="hover:rounded-full hover:bg-zinc-800 text-center p-4 cursor-pointer text-white" to="/about">About Me</Link>
              <Link className="hover:rounded-full hover:bg-zinc-800 text-center p-4 cursor-pointer text-white" to="/contact">Contact Me</Link>
            </div>
          </nav>
        </div>
        <div className="mt-36 grid grid-cols-3">
          <h1 className="text-white pl-36 col-span-2 tracking-wide">
            Front End Engineer
          </h1>
          <p className="text-white pl-36 description col-span-2 tracking-wide">
            I enjoy creating marketing websites and landing pages that help to tell brand stories, increase conversion and build trust.
          </p>
        </div>
        <Projects />
      </div>
      <About/>

    </>
  );
}

export default App;
