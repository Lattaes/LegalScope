import React from 'react';
import {
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-gray-300 py-8 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-8">
        <div className="mb-8 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold text-[#00df9a]">LEGALSCOPE.</h1>
          <p className="py-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex justify-between md:w-[75%] md:ml-auto my-6">
            <FaInstagram size={24} />
            <FaTwitterSquare size={24} />
            <FaGithubSquare size={24} />
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="mb-8">
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul className="mt-6 text-sm">
              <li className="py-1">Analytics</li>
              <li className="py-1">Marketing</li>
              <li className="py-1">Commerce</li>
              <li className="py-1">Insights</li>
            </ul>
          </div>
          <div className="mb-8">
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul className="mt-6 text-sm">
              <li className="py-1">Pricing</li>
              <li className="py-1">Documentation</li>
              <li className="py-1">Guides</li>
              <li className="py-1">API Status</li>
            </ul>
          </div>
          <div className="mb-8">
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul className="mt-6 text-sm">
              <li className="py-1">About</li>
              <li className="py-1">Blog</li>
              <li className="py-1">Jobs</li>
              <li className="py-1">Press</li>
              <li className="py-1">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul className="mt-6 text-sm">
              <li className="py-1">Claim</li>
              <li className="py-1">Policy</li>
              <li className="py-1">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
