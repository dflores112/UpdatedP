import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Contact</h2>
      <Link className="hover:rounded-full hover:bg-amber-500 text-center p-4 cursor-pointer" to="/">Home</Link>
    </main>
  );
}
