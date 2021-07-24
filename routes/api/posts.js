const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Post = require("../../models/Post");

// @route GET api/posts/test
// @desc test posts route
// @access public

router.get("/test", (req, res) => {
  res.json({ msg: " posts api is working !! " });
});

// @route GET api/posts
// @desc create post
// @access private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newPost = new Post({
      text: req.body.text,
      /*
      name: req.body.name,
      avatar: req.body.avatar,
      */
      user: req.user.id,
    });
    newPost.save().then((post) => {
      res.json(post);
    });
  }
);
module.exports = router;
