import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="bg-white px-36 py-16 grid grid-cols-3 tracking-wide description">
      <div className="col-span-2">
        <h2 className="text-4xl font-extrabold mb-8">
          Approach
        </h2>
        <p className="mb-16">
          We see marketing websites as an essential tool that allows brands to tell their story and showcase what makes them unique.
          Marketing websites should carry a tone of voice that syncs with the chosen brand attributes to help send the right
          message to the target audience. While designing websites, we apply key brand identity elements to create a cohesive experience
          that reflects both the state of the brand today and their strategic goals and aspirations for the future.
        </p>

        <h2 className="text-4xl font-extrabold mb-8">
          Capabilities
        </h2>
        <p className="mb-16">
          Our web design process generates a consistent website or app that reflects the brand strategy, visual identity, and verbal identity of the brand. It also helps to establish a prominent position on the market.
        </p>

      </div>
    </main>
  );
}
