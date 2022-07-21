const express = require('express');
const authRouter = express.Router();
const { loginUser, registerUser } = require('../controllers/authController');
//  , resetPassword, logOut, forgotPassword
authRouter.route("/", (req, res) => {
  res.json({ server: "running" })
})

authRouter
  .route('/login')
  .post(loginUser);

authRouter
  .route('/signup')
  .post(registerUser);

// authRouter
//   .route('/logout')
//   .get(logOut);

// authRouter
//   .route('/resetpassword/:token')
//   .post(resetPassword);

// authRouter.
//   route('/forgotpassword')
//   .post(forgotPassword);

module.exports = authRouter