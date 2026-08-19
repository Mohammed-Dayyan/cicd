const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  const res = await fetch(POSTS_URL);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

module.exports = { getPosts };
