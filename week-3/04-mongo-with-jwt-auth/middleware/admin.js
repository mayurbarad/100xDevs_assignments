const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  // how token will look like
  // Bearer akldfiophihfkaskhgihsaihighsdknip
  const words = token.split(" ");
  // after split words = ["Bearer", "akldfiophihfkaskhgihsaihighsdknip"]
  const jwtToken = words[1];
  const decodedVal = jwt.verify(jwtToken, JWT_SECRET);
  if (decodedVal.username) {
    next();
  } else {
    res.status(403).json({
      message: "User not authenticated",
    });
  }
}

module.exports = adminMiddleware;
