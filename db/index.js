const mongoose = require("mongoose");
const model = require("../models");

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://anyone:Manicweedman2@cluster0.w9rnd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useUnifiedTopology: true });

const db = mongoose.connection;

const paymentSeed = require("./sample.json");

model.Payment.deleteMany({})
  .then(() => model.Payment.insertMany(paymentSeed))
  .then((data) => {
    console.log("records inserted!");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.on("error", (err) => {
  console.log(`There was an error connecting to the database: ${err}`);
});
db.once("open", () => {
  console.log(
    `You have successfully connected to your mongo database: ${MONGODB_URI}`
  );
});

module.exports = db;
