const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const verifyToken = require("./verify");
const env = require("dotenv").config({ path: "./../.env" });

const {
  models: { users }
} = require("./../models");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email_user,
    pass: process.env.email_password
  }
});

router.post("/register", (req, res) => {
  // check if email already in db
  users.findAndCountAll({ where: { email: req.body.email } }).then((result) => {
    if (result.count > 0) {
      res.status(400).json({ message: "Email already in db" });
    } else {
      // hashing password
      const hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

      // building user object
      const user = {
        email: req.body.email,
        password: hash,
        name: req.body.name,
        created_at: Date.now()
      };

      // adding user to db
      users.create(user);

      // creating token
      const token = jwt.sign(user, process.env.secret_token, {
        expiresIn: "1min"
      });

      // send response
      res
        .status(200)
        .json({ message: "User Created" })
        .cookie("token", token, { httpOnly: true })
        .end();

      // build email
      const mailOptions = {
        from: process.env.email_user,
        to: req.body.email,
        subject: "Welcome to SoundSpeller",
        text: "That was easy!"
      };

      // send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
  });
});

router.post("/login", (req, res) => {
  users.findAndCountAll({ where: { email: req.body.email } }).then((result) => {
    if (result.count > 0) {
      bcrypt.compare(
        req.body.password,
        result.rows[0].dataValues.password,
        (err, r) => {
          // res === true
          if (r) {
            const token = jwt.sign(
              result.rows[0].dataValues,
              process.env.secret_token,
              {
                expiresIn: "1min"
              }
            );

            res
              .cookie("token", token, { httpOnly: true })
              .status(200)
              .json({ message: "Logged In" });
          } else {
            return res.status(400).json({ message: "Wrong Password" });
          }
        }
      );
    } else {
      return res.status(400).json({ message: "Email or Password wrong" });
    }
  });
});

router.get("/verify", verifyToken, (req, res) => {
  res.status(200);
});

router.post("/passwordreset", (req, res) => {
  users.findAndCountAll({ where: { email: req.body.email } }).then((result) => {
    if (result.count > 0) {
      const token = jwt.sign(
        result.rows[0].dataValues.password,
        result.rows[0].dataValues.created_at
      );

      // build email
      const mailOptions = {
        from: process.env.email_user,
        to: req.body.email,
        subject: "SoundSpeller Reset Password",
        html: `<h1>Welcome</h1><p>That was easy! <a href="http://localhost:3000/resetpassword/${token}">Reset Password</a></p>`
      };

      // send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      res
        .status(200)
        .json({ message: "Reset Password Link has been sent to your email" });
    } else {
      return res.status(400).json({ message: "Email doesn't exist" });
    }
  });
});

module.exports = router;
