const userModal = require("../model/userModel");
const jwt = require('jsonwebtoken')



const loginUser = async (req, res) => {



  const { email, password } = req.body;

  let user = await userModal.findOne({
    email: email,
    password: password
  })

  if (user) {
    const token = jwt.sign({
      name: user.name,
      email: email,
    },
      'secret12345')

    res.json({ status: 1, user: token })
  }
  else {
    res.json({ status: 0 })
  }
}

const registerUser = async (req, res) => {

  let user = await userModal.findOne({
    email: req.body.email,
    password: req.body.password
  })


  try {
    user = await userModal.create(req.body);
    user.password = undefined;
    if (!user) {

      res.json({
        success: true,
        message: "User Added successfully",
        userData: user,
      });

    }
    else {
      res.json({
        success: false,
        message: "Error while sign up, please try again!",
      });
    }
  }
  catch (err) {
    res.json({
      success: false,
      message: `Server error: ${err.message}`,
    });
  }

}



module.exports = { loginUser, registerUser }