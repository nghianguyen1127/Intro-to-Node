const myOwnMiddleware = (req, res, next) => {
  if (res && res.url !== "/") {
    console.log("Applied Middleware!");
    next(); // Useing to stop and move to next phase
  } else {
    console.log("Unapplied Middleware!");
  }
};

module.exports = { myOwnMiddleware };
