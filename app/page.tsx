import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <p className="text-sm text-[#888] mb-8">
        총 {posts.length}개의 글
      </p>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
