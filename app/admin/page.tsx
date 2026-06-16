import { auth, signOut } from "@/auth";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default async function AdminPage() {
  const session = await auth();
  const posts = getAllPosts();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-semibold text-[#1a1a1a]">관리자</h1>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="text-xs text-[#888] hover:text-[#1a1a1a] transition-colors"
          >
            로그아웃
          </button>
        </form>
      </div>

      <p className="text-sm text-[#888] mb-6">
        {session?.user?.email} 로 로그인됨
      </p>

      <div className="border border-[#e5e5e5] rounded">
        <div className="px-4 py-3 border-b border-[#e5e5e5] flex items-center justify-between">
          <span className="text-sm font-medium">글 목록</span>
          <span className="text-xs text-[#888]">총 {posts.length}개</span>
        </div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="px-4 py-3 border-b border-[#e5e5e5] last:border-0 flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-[#1a1a1a]">{post.title}</p>
              <p className="text-xs text-[#888] mt-0.5">
                {post.category} · {post.date}
              </p>
            </div>
            <Link
              href={`/posts/${post.id}`}
              className="text-xs text-[#888] hover:text-[#1a1a1a] transition-colors"
            >
              보기
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-[#f5f5f5] rounded text-xs text-[#888] leading-relaxed">
        <p className="font-medium text-[#1a1a1a] mb-2">글 추가 방법</p>
        <p>
          현재 글은 <code className="bg-[#e5e5e5] px-1 rounded">lib/posts.ts</code> 파일에서 관리됩니다.
          해당 파일의 <code className="bg-[#e5e5e5] px-1 rounded">posts</code> 배열에 새 글을 추가하세요.
        </p>
      </div>
    </div>
  );
}
