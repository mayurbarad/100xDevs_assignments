const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  // Admin.findOne({
  //   username: username,
  //   password: password,
  // }).then(function (value) {
  //   if (value) {
  //     next();
  //   } else {
  //     res.status(403).json({
  //       msg: "User doesn't exists",
  //     });
  //   }
  // });
  try {
    const admin = await Admin.findOne({
      username: username,
      password: password,
    });

    if (admin) {
      next();
    } else {
      res.status(403).json({
        msg: "Admin doesn't exists",
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "An error occured",
      error: error.message,
    });
  }
}

module.exports = adminMiddleware;
