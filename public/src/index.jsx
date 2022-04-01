import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes,
  Route,
} from 'react-router-dom';
import App from './routes/app.jsx';
import About from './routes/about.jsx';
import Contact from './routes/contact.jsx';
import Projects from './routes/projects.jsx';

ReactDOM
  .createRoot(document.getElementById('App'))
  .render(<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>);
