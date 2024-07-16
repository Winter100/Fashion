export interface Comment {
  id: string;
  user: string;
  content: string;
  parent_id: string | null;
  children: Comment[];
  created_at: string;
  user_id: string;
}

export const buildCommentsTree = (comments: Comment[] = []) => {
  const map: { [key: string]: Comment } = {};
  const roots: Comment[] = [];

  // 모든 댓글을 맵에 저장
  comments.forEach((comment) => {
    comment.children = [];
    map[comment.id] = comment;
  });

  // 부모-자식 관계 설정
  comments.forEach((comment) => {
    if (comment.parent_id === null) {
      roots.push(comment);
    } else {
      if (map[comment.parent_id]) {
        map[comment.parent_id].children.push(comment);
      }
    }
  });

  return roots;
};
