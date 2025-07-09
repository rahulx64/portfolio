"use client";

import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react"; // optional icons

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">📬 Contact Me</h1>
        <p className="text-gray-600 mb-8 text-lg">
          I m always open to talk about projects, tech, or opportunities. Feel free to reach out!
        </p>

        <div className="space-y-6 text-left bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center gap-4">
            <Mail className="text-red-600" />
            <Link
              href="mailto:rahulxyad@gmail.com"
              className="text-lg text-gray-700 hover:text-red-600 transition"
            >
              rahulxyad@gmail.com
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Linkedin className="text-blue-600" />
            <Link
              href="https://www.linkedin.com/in/rahulranjan64/"
              target="_blank"
              className="text-lg text-gray-700 hover:text-blue-600 transition"
            >
              LinkedIn Profile
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Github className="text-black" />
            <Link
              href="https://github.com/rahulx64"
              target="_blank"
              className="text-lg text-gray-700 hover:text-black transition"
            >
              GitHub Profile
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
