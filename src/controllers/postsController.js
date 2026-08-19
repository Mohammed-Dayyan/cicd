const { getPosts } = require("../services/postsService");

async function getPostsHandler(req, res) {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch {
    res.status(502).json({ error: "Upstream API failed" });
  }
}

module.exports = { getPostsHandler };
