const express = require('express');
const router = express.Router();
const indexController = require("../controllers/indexController");
const {check, body} =require("express-validator");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/",[
  check("name").isLength({min:1}).withMessage("Name is required"),
  check("email").isEmail({min:1}).withMessage("Email is required"),
  check("color").isLength({min:1}).withMessage("Color is required"),
  body("age").custom(value=>{
    if(isNaN(value)){
      throw new Error("Age must be a number");
    } else {
      return true;

    }
  })
],indexController.index);

router.get("/color", indexController.color);


module.exports = router;
