exports.createPostValidator = (req, res, next) => {
  req.check("title", "Title is required.").notEmpty();
  req.check("title", "Title must be between 4 to 150").isLength({
    min: 4,
    max: 150,
  });

  req.check("body", "Body is required.").notEmpty();
  req.check("body", "Body must be between 4 to 2000").isLength({
    min: 4,
    max: 2000,
  });

  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({
      error: firstError,
    });
  }
  next();
};
