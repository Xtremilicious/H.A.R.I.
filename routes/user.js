const router = require("express").Router();
const bcrypt = require("bcryptjs");

const User = require("../model/User");

const {
  registerValidation,
  loginValidation
} = require("../services/validation");
const { generateLoginToken } = require("../services/generateToken");

router.post("/register", async (req, res) => {
  // Validate
  const { error } = registerValidation(req.body);

  if (error) {
    //return res.status(400).send(error.details[0].message);
    return res.status(400).send("hi from validation");
  }

  console.log(req.body);
  const { name, email, phone, type,password } = req.body;
  //Check if user already exists
  const phoneExist = await User.findOne({ phone });

  if (phoneExist) {
    return res.status(400).send("User already exists");
  }

  // Hash a Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // Create User
  const today = new Date().toISOString();
  const user = new User({
    name,
    email,
    phone,
    type,
    password: hashPassword,
    created: today,
    treating: []
  });

  console.log("Before Saving");
  try {
    console.log("Saving...");
    await user.save();
    console.log("Saved!");
    // Create and assign token
    const tokenExp = 60 * 60 * 24; // 24 hours
    const token = generateLoginToken(user, tokenExp);
    res.status(200).json({
      user,
      token
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  // Validate
  const { error } = loginValidation(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { phone, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ phone });

  if (!user) {
    return res
      .status(400) 
      .send({ message: "User Doesn't Exist, Please Register!" });
  }

  // Password is correct
  const validPass = await bcrypt.compare(password, user.password);

  if (!validPass) {
    return res.status(400).send({ message: "Inavlid Password!" });
  }

  try {
    // Create and assign token
    const tokenExp = 60 * 60 * 24; // 24 hours
    const token = generateLoginToken(user, tokenExp);

    res.status(200).json({
      user,
      token
    });
  } catch (error) {
    res.status(400).send("Error!");
  }
});

//get current user from token
router.post("/me", function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token;

  if (!token) {
    return res.status(401).json({ message: "Must pass token" });
  }

  try {
    // Check token that was passed by decoding token using secret
    jwt.verify(token, process.env.TOKEN_SECRET, function(err, user) {
      if (err) throw err;
      //return user using the id from w/in JWTToken

      User.findById(
        {
          _id: user._id
        },
        function(err, user) {
          if (err) throw err;

          res.json({
            token
          });
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
