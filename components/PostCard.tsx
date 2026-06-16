import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="py-8 border-b border-[#e5e5e5] last:border-0">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs text-[#888] font-medium uppercase tracking-wider">
          {post.category}
        </span>
        <span className="text-[#e5e5e5]">·</span>
        <time className="text-xs text-[#888]">{post.date}</time>
      </div>
      <Link href={`/posts/${post.id}`}>
        <h2 className="text-lg font-semibold text-[#1a1a1a] hover:opacity-60 transition-opacity mb-2">
          {post.title}
        </h2>
      </Link>
      <p className="text-sm text-[#555] leading-relaxed">{post.excerpt}</p>
    </article>
  );
}
