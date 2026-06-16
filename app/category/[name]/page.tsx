import { getPostsByCategory, CATEGORIES } from "@/lib/posts";
import type { Category } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ name: encodeURIComponent(cat) }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const category = decodeURIComponent(name) as Category;

  if (!CATEGORIES.includes(category)) notFound();

  const posts = getPostsByCategory(category);

  return (
    <div>
      <p className="text-sm text-[#888] mb-8">
        {category} · {posts.length}개의 글
      </p>
      <div>
        {posts.length === 0 ? (
          <p className="text-sm text-[#888] py-12 text-center">
            아직 작성된 글이 없습니다.
          </p>
        ) : (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
}
