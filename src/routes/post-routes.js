const express = require("express");
const {
  getPosts,
  getPost,
  searchPost,
  createPost,
  updatePostById,
  deletePostById,
} = require("../controllers/post-controller");

const router = express.Router();

router.route("/").get(getPosts).post(createPost);
router.route("/:id").get(getPost).put(updatePostById).delete(deletePostById);

module.exports = router;
