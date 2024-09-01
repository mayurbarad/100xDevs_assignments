const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { JWT_SECRET } = require("../config");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({ username, password });
  res.json({
    message: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const isValid = User.find({ username, password });
  if (isValid) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      message: "Incorrect email and password",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  const courseId = req.params.courseId;

  await User.updateOne({ username }, { $push: { purchasedCoursed: courseId } });
  res.json({
    message: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.username;
  const user = await User.find({ username });
  console.log(user[0].purchasedCoursed);
  //   Course.find({ _id: { $in: user[0].purchasedCoursed } }) : This line queries the Course collection to find all courses whose _id matches any of the IDs in the user[0].purchasedCoursed array.
  const courses = await Course.find({ _id: { $in: user[0].purchasedCoursed } });
  res.json({
    courses: courses,
  });
});

module.exports = router;
