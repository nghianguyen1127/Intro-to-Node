const express = require("express"),
  { getPosts, createPost } = require("../controllers/post"),
  validators = require("../validators");

const router = express.Router();

router.get("/get", getPosts);
router.post("/post", validators.createPostValidator, createPost);

module.exports = router;
