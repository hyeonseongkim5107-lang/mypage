import { getPostById, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ id: post.id }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) notFound();

  return (
    <article className="max-w-prose">
      <Link
        href={`/category/${encodeURIComponent(post.category)}`}
        className="text-xs text-[#888] hover:text-[#1a1a1a] transition-colors uppercase tracking-wider font-medium"
      >
        ← {post.category}
      </Link>
      <h1 className="text-2xl font-semibold text-[#1a1a1a] mt-4 mb-2">
        {post.title}
      </h1>
      <time className="text-xs text-[#888]">{post.date}</time>
      <div className="mt-8 text-sm text-[#333] leading-loose space-y-4">
        {post.content.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
}
