import Link from "next/link";
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Company Name</h3>
            <p className="text-sm">© 2024 Company Name. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-2xl hover:text-gray-300">
                <FaGithub />
              </Link>
              <Link href="#" className="text-2xl hover:text-gray-300">
                <FaTwitter />
              </Link>
              <Link href="#" className="text-2xl hover:text-gray-300">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
