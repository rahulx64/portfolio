"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute -top-20 left-1/2 w-[80vw] h-[80vw] bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 rounded-full blur-3xl opacity-40 animate-pulse -z-10" />
      </motion.div>

      {/* Main Content */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 py-24 md:py-32 max-w-7xl mx-auto z-10">
        {/* Left Text Block */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I&apos;m <span className="text-indigo-400">Rahul Ranjan</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-lg">
            I&apos;m a passionate full-stack developer skilled in Next.js, MERN stack, and system design. I love building fast, scalable, and beautiful web apps.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="/projects"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="border border-indigo-400 hover:bg-indigo-800 text-indigo-300 font-medium py-2 px-6 rounded-lg transition"
            >
              Contact Me
            </Link>
            <a
              href=""
              className="border border-indigo-400 hover:bg-indigo-800 text-indigo-300 font-medium py-2 px-6 rounded-lg transition"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right Image Block */}
        <div className="mb-10 md:mb-0 md:ml-12">
          <Image
            src="/rahul.jpg"
            alt="Rahul Ranjan"
            width={300}
            height={300}
            className="rounded-full border-4 border-indigo-500 shadow-xl hover:scale-105 transition duration-300"
          />
        </div>
      </section>
    </main>
  );
}
