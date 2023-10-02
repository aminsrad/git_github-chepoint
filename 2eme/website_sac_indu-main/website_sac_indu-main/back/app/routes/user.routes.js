module.exports = (app) => {
  const users = require("../controllers/user.controller");

  var router = require("express").Router();

  // Create a new user
  router.post("/", users.create);
  //get all users
  router.get("/", users.findAll);
  // delete a new user
  router.delete("/:id", users.delete);
  // update user password
  router.put("/:id", users.update);

  app.use("/api/users", router);
};
