const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            required: [true, "Game Title is Required . "],
            minlength: [1, "Must Be 1 Character or more ."]
        },
        Genre: {
            type: String,
            required: [true, "Game Genre is Required ."],
            minlength: [3, "Must Be 3 Character or more ."]
        },
        Description: {
            type: String,
            required: [true, "Game Description Required ."],
            minlength: [7, "Description Must be More Than 7 Characters ."]
        },
        Rating: {
            type: Number,
            required: [true, "Rating is Required"],
            min: [1, "Cant be lower than 1"],
            max: [100, "Cant be over 100"]
        }
    }, {timestamps: true})

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;