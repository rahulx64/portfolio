"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "../../contents/projects"; // adjust path if different

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
          🚀 My Projects
        </h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    GitHub →
                  </Link>
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    className="text-sm text-green-600 hover:underline"
                  >
                    Live Demo →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
