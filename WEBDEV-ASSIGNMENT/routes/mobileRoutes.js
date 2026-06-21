const express = require("express");
const router = express.Router();

const mobileController = require("../controllers/mobileController.js");

router.get("/", mobileController.home);

router.get("/getdata", mobileController.getMobiles);

router.get("/insertdata", mobileController.insertPage);

router.post("/createdata", mobileController.createMobile);

router.get("/edit/:userid", mobileController.editPage);

router.post("/update/:userid", mobileController.updateMobile);

router.get("/delete/:id", mobileController.deleteMobile);

router.get("/search", mobileController.searchMobile);

module.exports = router;