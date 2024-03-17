const { getUser } = require("../service/userauth");

// async function ristrictToLoggedInUserOnly(req, res, next) {
//   const userUId = req.cookies?.uid;
//   const userUid = req.header["authorization"];
//   if (!userUId) return res.redirect("/login");
//   const token=userUid.split('Bearer ')[1];
//   const user = getUser(userUId);
//   if (!user) return res.redirect("/login");
//   req.user = user;
//   next();
// }

// async function checkAuth(req,res,next){
//   const userUId = req.cookies?.uid;
//   const userUid = req.header["authorization"];
//   const token = userUid.split("Bearer ")[1];
//   const user = getUser(userUId);
//   const user = getUser(token);
//   req.user = user;
//   next();
// }

// authotization topic below ,
/**cookie can be sent to only laptop or desktop(s)
 * but haeader authorization can be used with any device */

function checkForAuthorization(req, res, next) {
  const tokenCookie = req.cookies?.token;
  req.user = null;

  if (!tokenCookie)
    return next();

  const token = tokenCookie;
  const user = getUser(token);

  req.user = user;
  return next();
}

const ristrictTo = (roles = []) => {
  return (req, res, next) => {
    if (!req.user) return res.redirect("/login");

    if (!roles.includes(req.user.role)) return res.end("UnAuthorized");
    return next();
  };
};

module.exports = {
  // ristrictToLoggedInUserOnly,
  // checkAuth,
  checkForAuthorization,
  ristrictTo,
};
