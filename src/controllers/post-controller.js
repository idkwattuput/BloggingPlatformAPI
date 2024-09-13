const {
  retrievePosts,
  retrievePost,
  savePost,
  updatePost,
  deletePost,
} = require("../repositories/post-repository");

async function getPosts(req, res) {
  try {
    const searchTerm = req.query.term;
    const posts = await retrievePosts();
    if (!searchTerm) {
      return res.json({ data: posts });
    }
    const filteredPosts = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    return res.json({ data: filteredPosts });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
}

async function getPost(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Id is required" });
    }
    const post = await retrievePost(parseInt(id));
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    return res.json({ data: post });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
}

async function createPost(req, res) {
  try {
    const { title, content, category, tags } = req.body;
    if (
      !title ||
      typeof title !== "string" ||
      !content ||
      typeof content !== "string" ||
      !category ||
      typeof category !== "string" ||
      !tags ||
      typeof tags !== "object"
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const post = await savePost(req.body);
    return res.json({ data: post });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
}

async function updatePostById(req, res) {
  try {
    const { title, content, category, tags } = req.body;
    const { id } = req.params;
    if (
      !id ||
      !title ||
      typeof title !== "string" ||
      !content ||
      typeof content !== "string" ||
      !category ||
      typeof category !== "string" ||
      !tags ||
      typeof tags !== "object"
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const isPostExist = await retrievePost(parseInt(id));
    if (!isPostExist) {
      return res.status(404).json({ error: "Post not found" });
    }
    const post = await updatePost(parseInt(id), req.body);
    return res.json({ data: post });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
}

async function deletePostById(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Id is required" });
    }
    const isPostExist = await retrievePost(parseInt(id));
    if (!isPostExist) {
      return res.status(404).json({ error: "Post not found" });
    }
    await deletePost(parseInt(id));
    return res.status(204).json({ data: "OK" });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
}

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePostById,
  deletePostById,
};
