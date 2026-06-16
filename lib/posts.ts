export type Category = "독서" | "투자" | "군대" | "운동" | "잡생각";

export interface Post {
  id: string;
  title: string;
  category: Category;
  date: string;
  excerpt: string;
  content: string;
}

const posts: Post[] = [
  {
    id: "1",
    title: "2024년 독서 결산",
    category: "독서",
    date: "2024-12-31",
    excerpt: "올해 읽은 책들을 돌아보며.",
    content: `올해 총 24권의 책을 읽었다. 그중 가장 인상 깊었던 책은 《사피엔스》였다. 인류의 역사를 거시적 시각으로 바라보는 관점이 새로웠다.

독서는 생각의 폭을 넓혀준다. 매일 30분씩이라도 책을 읽는 습관을 들이면서 많은 것이 바뀌었다.

내년에는 철학 쪽 서적을 더 많이 읽어볼 생각이다.`,
  },
  {
    id: "2",
    title: "인덱스 펀드 장기 투자 원칙",
    category: "투자",
    date: "2024-11-15",
    excerpt: "시장을 이기려 하지 마라.",
    content: `장기 투자의 핵심은 단순하다. S&P500 인덱스 펀드에 꾸준히 넣고 잊어버리는 것.

워런 버핏도 대부분의 투자자에게는 인덱스 펀드를 권한다. 이유는 명확하다. 시장 평균을 지속적으로 이기는 펀드매니저는 극히 드물기 때문이다.

핵심 원칙:
1. 매월 고정 금액 투자 (적립식)
2. 시장 하락 시 추가 매수 기회로 인식
3. 최소 10년 이상 보유

단기 변동에 흔들리지 않는 멘탈이 가장 중요하다.`,
  },
  {
    id: "3",
    title: "군 생활에서 배운 것들",
    category: "군대",
    date: "2024-10-20",
    excerpt: "2년의 시간이 남긴 것.",
    content: `전역한 지 몇 달이 지났다. 군 생활에서 예상치 못하게 많은 것을 배웠다.

가장 큰 수확은 '기다림의 기술'이다. 군대에서는 불필요한 대기가 많다. 그 시간을 어떻게 쓰느냐가 개인 차이를 만든다.

나는 그 시간에 책을 읽고, 생각을 정리했다. 덕분에 독서 습관이 생겼다.

두 번째는 체력의 중요성이다. 체력이 뒷받침되지 않으면 정신도 흔들린다.`,
  },
  {
    id: "4",
    title: "달리기를 시작한 이유",
    category: "운동",
    date: "2024-09-05",
    excerpt: "아침 6시, 혼자 뛰는 시간.",
    content: `6개월째 매일 아침 달리고 있다. 처음엔 3km도 힘들었는데 지금은 10km가 기본이 됐다.

달리기의 매력은 단순함이다. 신발만 있으면 된다. 특별한 장비도, 파트너도 필요 없다.

그리고 생각이 정리된다. 복잡한 문제들이 달리다 보면 어느새 단순해진다. 뇌에 산소가 공급되어서인지 아이디어도 잘 떠오른다.

목표: 올해 안에 하프마라톤 완주.`,
  },
  {
    id: "5",
    title: "SNS를 끊고 나서",
    category: "잡생각",
    date: "2024-08-10",
    excerpt: "디지털 디톡스 3개월 후기.",
    content: `인스타그램, 트위터를 모두 삭제한 지 3개월이 됐다.

처음 2주는 정말 힘들었다. 습관적으로 앱을 열려다 없는 걸 확인하는 일이 하루에도 수십 번이었다.

3개월이 지난 지금은 오히려 훨씬 자유롭다. 남의 일상을 구경하는 데 쓰던 시간이 생겼다.

그 시간에 책을 읽고, 달리기를 하고, 이렇게 글을 쓴다.

SNS가 나쁜 건 아니다. 다만 나에게는 맞지 않았다.`,
  },
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostsByCategory(category: Category): Post[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getPostById(id: string): Post | undefined {
  return posts.find((p) => p.id === id);
}

export const CATEGORIES: Category[] = ["독서", "투자", "군대", "운동", "잡생각"];
