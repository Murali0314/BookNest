import React from 'react';

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-gray-500 text-base-content rounded p-10">
      {/* Social Icons */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <a href="https://github.com/Murali0314" target="_blank" rel="noopener noreferrer">
          <img src="github.svg" alt="GitHub" style={{ width: '30px' }} />
        </a>
        <a href="https://www.linkedin.com/in/gorlamuralidhar/" target="_blank" rel="noopener noreferrer">
          <img src="linkedin.svg" alt="LinkedIn" style={{ width: '30px' }} />
        </a>
      
        <a href="https://www.facebook.com/profile/@murali.162438" target="_blank" rel="noopener noreferrer">
          <img src="facebook.svg" alt="Facebook" style={{ width: '30px' }} />
        </a>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-10 text-center text-sm text-black-500 py-4 border-t w-full">
        <p>
          Made with ❤ by <strong>Gorla Muralidhar Reddy</strong> | © {new Date().getFullYear()} |{' '}
          <a href="mailto:gorlamuralidhar@gmail.com" className="text-black-500 underline">Let's Connect</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
