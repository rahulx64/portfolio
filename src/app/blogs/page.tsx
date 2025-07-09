"use client";

import Link from "next/link";
import { blogs } from "../../contents/blogs"; // Make sure this path is correct

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-6">
          📚 My Writings
        </h1>
        <p className="text-center text-lg text-gray-500 mb-12">
          Sharing my thoughts on development, design systems, and more.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={`/blog/${blog.slug}`}
              className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-gray-200 hover:border-red-500 group"
            >
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-red-700 transition">
                {blog.title}
              </h2>
              <p className="mt-2 text-gray-600">{blog.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
