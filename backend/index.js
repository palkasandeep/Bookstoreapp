import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
// we are importing the bookoute
import bookroute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 4000;
const mngport = process.env.MONGO_PORT;

console.log(`MongoDB connection string: ${mngport}`); // Debugging line

if (!mngport) {
  console.error('Error: MONGO_PORT is not defined in .env file');
  process.exit(1);
}

try {
  mongoose.connect(mngport, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("mongodb is connected");
} catch (error) {
  console.log("error", error);
}
//defing the routes

app.use("/book", bookroute);
app.use("/user", userRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
