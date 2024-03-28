const asyncHandler = require("express-async-handler");
const person = require("../models/personModel");



const createPerson = asyncHandler (async (req,res)=>{
    const {firstname, lastname, picture, gender, dob, profession, shoesize, 
        haircolor, hairlength, waist, height, weight, casting} = req.body;
    if(!firstname){
        res.status(400);
        throw new Error("name required");

    }

    const Person = await person.create({firstname, lastname, picture, gender, dob, profession, shoesize, 
        haircolor, hairlength, waist, height, weight, casting});

    res.status(200).json(Person);
});

const getAllPerson = asyncHandler( async (req,res)=>{
    const persons = await person.find();
    res.status(200).json(persons);
});

const getSpecificPerson = asyncHandler( async (req,res)=>{
    //const persons = await person.find({firstname :req.params.id, lastname: "ali" });
    const persons = await person.find(req.query);

    //res.status(200).json(persons);
    console.log(req.query);

    if(persons.length > 0){
        res.status(200).json(persons);
    }
    res.status(200).json({empty : "empty mongo "});

    /*persons = await person.find({lastname : req.params.id});

    if(!(JSON.stringify(persons).length === 0 || '{}')){
        res.status(200).json(persons);
    }

    persons = await person.find({profession : req.params.id});

    if(!(JSON.stringify(persons).length === 0 || '{}')){
        res.status(200).json(persons);
    }



    res.status(200).json({});
    */
});



module.exports = {createPerson, getAllPerson, getSpecificPerson};