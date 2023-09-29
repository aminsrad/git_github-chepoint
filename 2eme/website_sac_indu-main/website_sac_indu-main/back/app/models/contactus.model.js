module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      Name: String,
      Email: String,
      Message: String,
    },
    { timestamps: true }
  );

  const Contactus = mongoose.model("contactus", schema);
  return Contactus;
};
