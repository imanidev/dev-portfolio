import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-sm">
              We are a company dedicated to providing high-quality products and
              services to our customers.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex">
              <a
                href="#"
                className="text-gray-400 hover:text-white mr-4"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white mr-4"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} My Site. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
