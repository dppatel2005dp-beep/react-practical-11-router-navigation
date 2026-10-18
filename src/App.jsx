import React from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

// Home Page Component
function Home() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-semibold text-xs rounded-full uppercase mb-4">
        Home Page
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">Welcome to Modern Web Academy</h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        This application demonstrates client-side Single Page Application (SPA) routing in React.
        Using <code>BrowserRouter</code>, <code>Routes</code>, <code>Route</code>, and <code>Link</code>,
        users can transition between views instantly without reloading the browser.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-1">⚡ Zero Page Reloads</h3>
          <p className="text-sm text-blue-700">Page updates dynamically in memory via the browser History API.</p>
        </div>
        <div className="p-4 bg-green-50 rounded-xl border border-green-100">
          <h3 className="font-bold text-green-900 mb-1">🔗 Declarative Links</h3>
          <p className="text-sm text-green-700">&lt;Link to="..."&gt; prevents default HTML anchor reload behavior.</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
          <h3 className="font-bold text-purple-900 mb-1">🛣️ Path Matching</h3>
          <p className="text-sm text-purple-700">&lt;Routes&gt; accurately evaluates and renders current route.</p>
        </div>
      </div>
    </div>
  );
}

// About Page Component
function About() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 font-semibold text-xs rounded-full uppercase mb-4">
        About Page
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">About React Router DOM</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        React Router is the standard routing library for React. It keeps your application UI in sync with the URL.
      </p>
      <div className="space-y-3">
        <div className="p-4 bg-gray-50 rounded-xl">
          <h4 className="font-semibold text-gray-800">1. BrowserRouter</h4>
          <p className="text-sm text-gray-600">Provides HTML5 history API navigation (/home, /about, /contact).</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl">
          <h4 className="font-semibold text-gray-800">2. Route & Routes</h4>
          <p className="text-sm text-gray-600">Defines the relationship between a URL path and its React element.</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl">
          <h4 className="font-semibold text-gray-800">3. Link</h4>
          <p className="text-sm text-gray-600">Replaces standard &lt;a href&gt; tags to enable client-side routing.</p>
        </div>
      </div>
    </div>
  );
}

// Contact Page Component
function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 font-semibold text-xs rounded-full uppercase mb-4">
        Contact Page
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">Get in Touch</h2>
      <p className="text-gray-600 mb-6">
        Have questions about the React Lab curriculum? Send us a message!
      </p>
      {submitted ? (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl">
          ✅ Thank you! Your message has been received. Navigation is still live in this SPA.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              required
              placeholder="e.g. John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows="3"
              required
              placeholder="Write your inquiry here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

// Navigation Bar
function Navigation() {
  const location = useLocation();

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `px-4 py-2 rounded-lg font-medium text-sm transition ${
      isActive
        ? "bg-blue-600 text-white shadow-sm"
        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
    }`;
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4 mb-8 rounded-xl shadow-sm">
      <div className="flex items-center space-x-2">
        <span className="text-2xl">⚛️</span>
        <span className="font-bold text-xl text-gray-800">React Router SPA</span>
      </div>
      <div className="flex space-x-2">
        <Link to="/" className={getLinkClass("/")}>Home</Link>
        <Link to="/about" className={getLinkClass("/about")}>About</Link>
        <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 p-6 max-w-4xl mx-auto">
        <header className="mb-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Unit 4 - Practical 1 (Practical 11)
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mt-2">
            React Router Navigation (BrowserRouter, Route, Link)
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Seamless navigation between Home, About, and Contact pages without webpage reloads.
          </p>
        </header>

        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
