const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const BookSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: "Please enter book Title",
            default: ""

        },
        authors: {
            type: [String],
            trim: true,
            required: "Please enter book Author(s)."
        },
        description: {
            type:String,
            default: ""
        },
        image: {
            type:String,
            default: ""
        },
        link:{
            type: String,
            default: ""
        }
    }
);

const Book = Mongoose.model("Book", BookSchema);

module.exports = {
    Book,
    BookSchema
};