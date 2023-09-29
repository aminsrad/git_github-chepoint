module.exports = (app) => {
  const products = require("../controllers/product.controller");

  var router = require("express").Router();
  /******* */
  const multer = require("multer");

  //const DIR = "/back/app/loaded_images";
  const storage = multer.diskStorage({
    destination: "images_uploaded",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      }
    },
  });
  /********** */

  // Create a new product

  router.post("/", upload.single("image"), products.create);
  /****** */
  /****** */

  // Retrieve all productss
  router.get("/", products.findAll);

  // Retrieve a single products with id
  router.get("/:id", products.findOne);

  // Update a products with id
  router.put("/:id", upload.single("image"), products.update);

  // Delete a products with id
  router.delete("/:id", products.delete);

  // Create a new products
  router.delete("/", products.deleteAll);

  app.use("/api/products", router);
};
