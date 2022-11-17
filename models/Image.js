const mongoose = require("mongoose");

const imageShcema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Image", imageShcema);
