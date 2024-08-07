export const TAG_NAME = {
  fashion: "fashion",
  detail: "detail",
  today: "today",
  tomorrow: "tomorrow",
  this: "this",
  write: "write",
  all: "all",
  mypage: "mypage",
  signin: "signin",
  signup: "signup",
  signout: "signout",
  list: "list",
};

/**
 * 이미지 용량 제한: 5MB
 */
export const IMAGE_MAX_SIZE = 1024 * 1024 * 5;

export const AUTH_KEY = "auth";

export const SUPABASE_USER_PROFILES = "user_profiles";

export const META_DATA = {
  title: "이 옷 어때?",
  content: "내 패션을 기록하고, 모두에게 자랑해 보세요.",
  width: 1200,
  heigth: 630,
  image: "/meta-image.png",
  keywords: [
    "패션",
    "트렌드",
    "스타일",
    "이 옷 어때?",
    "오늘 어때?",
    "내일 어때?",
    "이거 어때?",
    "옷 추천",
    "프론트 엔드 프로젝트",
  ],
};

export const TAG_MAPPINGS: Record<string, string> = {
  [TAG_NAME.today]: "오늘 어때?",
  [TAG_NAME.tomorrow]: "내일 어때?",
  [TAG_NAME.this]: "이거 어때?",
  [TAG_NAME.write]: "기록 남기기",
  [TAG_NAME.all]: "모두 보기",
  [TAG_NAME.mypage]: "My",
  [TAG_NAME.signin]: "로그인",
  [TAG_NAME.signup]: "회원가입",
  [TAG_NAME.signout]: "로그아웃",
  list: "My",
};
export const MY_FILTER_MAPPINGS: Record<string, string> = {
  up: "오래된 순",
  down: "최신 순",
};
