import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (

    <div className="flex items-center justify-center h-full">
      <nav className="grid grid-cols-3">
        <Link className="hover:rounded-full hover:bg-amber-500 text-center p-4 cursor-pointer" to="/projects">Projects</Link>
        <Link className="hover:rounded-full hover:bg-amber-500 text-center p-4 cursor-pointer" to="/about">About Me</Link>
        <Link className="hover:rounded-full hover:bg-amber-500 text-center p-4 cursor-pointer" to="/contact">Contact Me</Link>
      </nav>
    </div>
  );
}

export default App;
