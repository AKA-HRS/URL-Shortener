const jwt = require("jsonwebtoken");
const secretKey = "harsh@12"; //confidetial key that cannot be dislosed incase of stateless authenciation

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    secretKey
  );
}

function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, secretKey);
}

module.exports = {
  setUser,
  getUser,
};

/**this folder will work as a diary */
/**these function will set and get the session id and user*/
