"use client";

import React from "react";

const About = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-br from-white to-slate-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-6 tracking-tight leading-tight">
          👋 Hey, I&apos;m <span className="text-indigo-600 dark:text-indigo-400">Rahul Ranjan</span>
        </h1>

        <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-600 dark:text-gray-300 mb-6">
          “Driven by curiosity, fueled by code.”
        </blockquote>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          I&apos;m a <span className="font-medium text-indigo-600 dark:text-indigo-400">Computer Science & AI</span> student at IIIT Lucknow who enjoys building powerful, elegant, and scalable software systems.
          My interests lie in:
        </p>

        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-base space-y-1 mb-6">
          <li><span className="font-semibold">Full-stack web development</span> (MERN, Next.js)</li>
          <li><span className="font-semibold">AI & ML research</span> (NLP, Medical Image Segmentation)</li>
          <li><span className="font-semibold">System design</span> & scalable backend architectures</li>
        </ul>

        <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
          I&apos;ve worked on projects like <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">TalkNest</code> (a real-time chat app) and <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">Twix</code> (a social media platform), and I&apos;m currently exploring cloud infrastructure, sockets, and performance optimization.
        </p>

        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          In my free time, I love exploring new tools, writing technical content, and thinking about startup ideas. My goal is to contribute to impactful tech and constantly grow as a developer and innovator.
        </p>
      </div>
    </section>
  );
};

export default About;
