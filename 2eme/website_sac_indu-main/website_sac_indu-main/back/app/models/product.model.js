module.exports = (mongoose) => {
  var schema = mongoose.Schema(
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
