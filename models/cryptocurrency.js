var mongoose = require("mongoose");

//SCHEMA SETUP
var cryptocurrency = new mongoose.Schema({
    name: String,
    age: String,
    image: String,
    description: String,
    author: { 
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
}) ;

module.exports = mongoose.model("Cryptocurrency", cryptocurrency);