"use client";

import React from "react";
import { FaLink } from "react-icons/fa";
import {
     SiLeetcode,
     SiCodeforces,
     SiCodechef,
     SiGithub,
     SiLinkedin,
} from "react-icons/si";
import { SiJavascript, SiPython, SiCplusplus, SiMongodb, SiExpress, SiReact,SiNextdotjs, SiPrisma, SiRedis, SiDocker } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { Server } from "lucide-react";
const skills = [
     { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
     { name: "Python ", icon: <SiPython className="text-blue-500" /> },
     { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
     { name: "React", icon: <SiReact className="text-sky-400" /> },
     { name: "Node.js", icon: <FaNode className="text-green-500" /> },
     { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
     { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
     { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
     { name: "Prisma", icon: <SiPrisma className="text-violet-500" /> },
     { name: "Redis", icon: <SiRedis className="text-red-500" /> },
     { name: "BullMQ", icon: <Server className="text-red-600" /> },
     { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
   ];
const codingProfiles = [
     {
          name: "Codolio",
          url: "https://codolio.com/profile/tSJ1Lbrd",
          icon: <FaLink className="text-pink-500" />,
     },
     {
          name: "Codeforces",
          url: "https://codeforces.com/profile/Redhunter",
          icon: <SiCodeforces className="text-purple-600" />,
     },
     {
          name: "CodeChef",
          url: "https://www.codechef.com/users/rahul064",
          icon: <SiCodechef className="text-[#5B4638]" />,
     },
     {
          name: "LeetCode",
          url: "https://leetcode.com/u/rahulX64/",
          icon: <SiLeetcode className="text-yellow-500" />,
     },
     {
          name: "GitHub",
          url: "https://github.com/rahulx64",
          icon: <SiGithub className="text-black dark:text-white" />,
     },
     {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/rahulranjan64/",
          icon: <SiLinkedin className="text-blue-600" />,
     },
];

const CodingPage = () => {
     return (
          <> 
          <section className="min-h-screen bg-gradient-to-br from-white to-slate-100 dark:from-gray-900 dark:to-gray-800 px-6 py-16">
               <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-8">
                         🧠 Coding Profiles
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                         Explore my problem-solving journey across various platforms where I
                         sharpen my DSA, algorithms, and competitive programming skills.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                         {codingProfiles.map((profile) => (
                              <a
                                   href={profile.url}
                                   key={profile.name}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-4"
                              >
                                   <div className="text-3xl">{profile.icon}</div>
                                   <div className="text-left">
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-indigo-600">
                                             {profile.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                             Visit Profile
                                        </p>
                                   </div>
                              </a>
                         ))}
                    </div>
               </div>
          </section>
           <section className="py-12 px-6 bg-gray-950 text-white" id="skills">
           <h2 className="text-3xl font-bold text-center mb-8">🛠 My Skills</h2>
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
             {skills.map((skill, index) => (
               <div
                 key={index}
                 className="flex flex-col items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 p-4 rounded-xl shadow-md transition"
               >
                 <div className="text-4xl">{skill.icon}</div>
                 <p className="text-sm font-medium">{skill.name}</p>
               </div>
             ))}
           </div>
         </section>
          </>
     );
};

export default CodingPage;
