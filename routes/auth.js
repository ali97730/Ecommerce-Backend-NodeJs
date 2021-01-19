const { Router } = require("express");
var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

const {isSignedIn , signout , signin, signup } = require("../controllers/auth");

//signup route
router.post("/signup",[
        check("name").isLength({ min : 3}).withMessage("name should be at least3 character"),
        check("email").isEmail().withMessage(" email is required"),
        check("password").isLength({min : 3}).withMessage("password should be atleast 3 characters"),


],signup);

//signin route
router.post("/signin",[

       // check("name").isLength({ min : 3}).withMessage("name should be at least3 character"),
        check("email").isEmail().withMessage(" email is required"),
        check("password").isLength({min : 1}).withMessage("password field is required")
        

],signin);


router.get("/signout",signout);
router.get("/testroute",isSignedIn,(req,res)=>{
        res.send(" A protected route");

});

module.exports = router;