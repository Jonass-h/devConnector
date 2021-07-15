const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const gravatar = require("gravatar");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ msg: " users api is working !! " });
});

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res.status(400).json({ email: " email already exists " });
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: "200", //size
          r: "pg", //rating
          d: "mm", //default
        });

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password,
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => res.json(user))
              .catch((err) => console.log(err));
          });
        });
      }
    })
    .catch(() => {
      console.log("find one not working !!  ");
    });
});

module.exports = router;
