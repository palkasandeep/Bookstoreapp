import mongoose from "mongoose";
const bookschema = mongoose.Schema({
  //defing the schema for the front end data
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String
})
//creating the model for the schema just we have created above
const Book = mongoose.model("Book", bookschema);//here book is the collection
export default Book;
//now define controller folder