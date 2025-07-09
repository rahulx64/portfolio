"use client";

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
     return (
          <footer className="bg-gray-900 text-white px-6 py-10 mt-10 rounded-t-1xl shadow-xl">
               <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Developer Identity */}
                    <div>
                         <h2 className="text-xl font-semibold mb-2">Rahul Ranjan</h2>
                         <p className="text-gray-400">
                              Passionate Software Developer | Enthusiast in System Design, DSA, Competitive Programming & Full Stack Dev
                         </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                         <h3 className="text-lg font-semibold mb-2">Explore</h3>
                         <ul className="text-gray-400 space-y-1">
                              <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
                              <li><Link href="/coding" className="hover:text-white transition">Skills</Link></li>
                              <li><Link href="/coding" className="hover:text-white transition">Experience</Link></li>
                              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                         </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                         <h3 className="text-lg font-semibold mb-2">Connect with Me</h3>
                         <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-400">
                              <a href="https://github.com/rahulx64" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub /></a>
                              <a href="https://www.linkedin.com/in/rahulranjan64/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedin /></a>
                              <a href="mailto:your.rahulxyad@gmail.com" className="hover:text-white"><FaEnvelope /></a>
                         </div>
                    </div>
               </div>

               <div className="text-center text-sm text-gray-500 mt-8">
                    © {new Date().getFullYear()} Rahul Ranjan. All rights reserved.
               </div>
          </footer>
     );
};

export default Footer;
