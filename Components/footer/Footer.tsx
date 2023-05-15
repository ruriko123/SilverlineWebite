import React from "react";
import { Divider } from 'rsuite';




function Footer() {
  return (
    <main className="m-auto">
      <div>
        {/* component */}
        {/* Unicons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css"
        />

        <footer className="bg-gray-800  sm:mt-10 pt-10">
          <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
            {/* Col-1 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Services
              </div>
              {/* Links */}
              <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Installation
              </a>
              <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Release Notes
              </a>
              <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Upgrade Guide
              </a>
              <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Using with Preprocessors
              </a>
            </div>
            {/* Col-2 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Support
              </div>
              {/* Links */}
              <a
                href="/contact"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Contact Us
              </a>
              <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                FAQ’s
              </a>
              <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Terms of Use
              </a>
              <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Privacy Policy
              </a>
            </div>
            {/* Col-3 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Contact
              </div>
              {/* Links */}
              <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Kalimati, Kathmandu, Nepal
              </span>
              <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                info@silverlinepos.com
              </span>
              <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                +977-9801456025
              </span>
            </div>
            {/* Col-3 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Community
              </div>
              {/* Links */}
              <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Facebook
              </a>
              <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Linkedin
              </a>
              <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Twitter
              </a>
              <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                YouTube
              </a>
            </div>
          </div>
          <Divider className="mb-1"></Divider>  
          {/* Copyright Bar */}
          <div className="pt-2">
            <div
              className="flex pb-5 px-3 m-auto pt-5 
      border-t border-gray-500 text-gray-400 text-sm 
      flex-col md:flex-row max-w-6xl">
              <div className="mt-2">
                © Copyright <span className="text-medium font-bold">SilverLine System Integrators Pvt. Ltd.</span> All Rights Reserved.
              </div>
              {/* Required Unicons (if you want) */}
              <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-facebook-f" />
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-twitter-alt" />
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-youtube" />
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-linkedin" />
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-instagram" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Footer;
