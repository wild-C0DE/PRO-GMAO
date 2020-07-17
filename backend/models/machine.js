const mongoose = require("mongoose");

//*********Schema******** */
const Schema = mongoose.Schema;
const Machine = new Schema({
    name: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  book: {
    type: String,
    required: true,
  },
});

// Model
const BlogTopBook = mongoose.model("BlogTopBook", BlogBook);

module.exports = BlogTopBook;
