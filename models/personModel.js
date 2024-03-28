const mongoose = require("mongoose");


const personSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "plese add name"],
        },
        lastname: {
            type: String,
            
        },
        picture: {
            type: String,
        },
        gender: {
            type: String,
        },
        dob: {
            type: String,
        },
        profession: {
            type: String,
        },
        shoesize: {
            type: Number,
        },
        haircolor: {
            type: String,
        },
        hairlength: {
            type: Number,
        },
        waist: {
            type: Number,
        },
        height: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        casting: {
            type: String,
        },

    },
    
);

module.exports = mongoose.model("person", personSchema);
