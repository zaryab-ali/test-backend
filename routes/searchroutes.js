const express = require("express");
const {getSpecificPerson} = require("../controllers/personcontroller");

const router = express.Router();

router.route("/").get(getSpecificPerson);



//router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;