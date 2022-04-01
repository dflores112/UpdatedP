import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="bg-blue h-full">
      <h2>About</h2>
      <Link className="hover:rounded-full hover:bg-amber-500 text-center p-4 cursor-pointer" to="/">Home</Link>
    </main>
  );
}
