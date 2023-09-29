const db = require("../models");
const Contatus = db.contact_us;

module.exports = (app) => {
  var router = require("express").Router();
  // Create a new Contact US
  router.post("/", (req, res) => {
    if (!req.body.Name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    const contactus = new Contatus({
      Name: req.body.Name,
      Email: req.body.Email,
      Message: req.body.Message,
    });
    // Save Contactus in the database
    contactus
      .save(contactus)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the contactus.",
        });
      });
  });
  router.get("/", (req, res) => {
    Contatus.find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving contacts.",
        });
      });
  });
  app.use("/api/contactus", router);
};
