module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    // {
    //   image: String,
    //   title: String,
    //   description: String,
    // },
    {
      title: String,
      image: {
        data: Buffer,
        contentType: String,
      },
      description: String,
      published: Boolean,
    },
    { timestamps: true }
  );

  const Product = mongoose.model("Product", schema);
  return Product;
};
