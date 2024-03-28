const express = require("express");
const {createPerson, getAllPerson } = require("../controllers/personcontroller");

const router = express.Router();

router.route("/").post(createPerson);

router.route("/").get(getAllPerson);


//router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;