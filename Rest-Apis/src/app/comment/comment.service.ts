
const API_BASE = 'http://localhost:8080/api/comments';


export async function getAllComments() {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error('Failed to load comments');
  return res.json();
}

export async function getCommentById(id: number) {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error('Failed to load comment');
  return res.json();
}

export async function createComment(payload: any) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to create comment');
  return res.json();
}

export async function updateComment(id: number, payload: any) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to update comment');
  return res.json();
}

export async function deleteComment(id: number) {
  const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete comment');
  return res.text();
}
