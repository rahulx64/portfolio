// app/blog/[slug]/page.tsx
import { blogs } from "@/contents/blogs";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogDetail({ params }: Props) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 prose prose-invert">
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        {blog.date} · {blog.readTime}
      </p>
      <article>
        {blog.excerpt.split("\n").map((para, i) => (
          <p key={i}>{para.trim()}</p>
        ))}
      </article>
    </main>
  );
}
