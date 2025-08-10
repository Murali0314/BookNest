import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-br from-[#160022] via-[#200c3c] to-[#0f051d] text-white px-6 md:px-16 py-12">
        <div className="max-w-6xl mx-auto bg-white bg-opacity-5 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-purple-800">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-purple-400 drop-shadow-lg">
            📚 Welcome to BookNest
          </h2>

          <p className="text-lg md:text-xl font-semibold mb-4 text-pink-300">
            📖 Where every book has a story—and so do we.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">
            At <span className="text-blue-300 font-semibold">BookNest</span>, books are more than just printed pages—they're gateways to infinite worlds. Our mission is to connect readers with stories that inspire, educate, and entertain. Whether you're into thrillers, romances, classics, or sci-fi, we’ve got something just for you.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">
            From casual weekend readers to academic researchers, our shelves are curated for all. Dive into genres like <span className="text-yellow-300 font-medium">mystery, self-help, fantasy, and more</span>—all in one place.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-purple-300 mt-8 mb-4">✨ Why Readers Love Us</h3>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-100 space-y-2 mb-6">
            <li>📌 Curated collections tailored to your interests</li>
            <li>⚡ 100% free access & lightning-fast delivery</li>
            <li>🔐 Seamless, secure, and simple checkout process</li>
            <li>📖 Personalized book recommendations</li>
            <li>🆕 Regularly updated catalog with latest bestsellers</li>
          </ul>

          <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-200">
            🌟 Join our vibrant community of book lovers. Let your next favorite book find <em className="text-blue-200 font-bold">you</em>.
          </p>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-block mt-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-purple-800 transition duration-300"
            >
              Got questions or suggestions? Let’s Connect →
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
