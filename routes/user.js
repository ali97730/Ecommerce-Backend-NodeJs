
const express = require("express");
const router = express.Router()

const {userPurchaseList,updateUser, getUser,getUserById} = require("../controllers/user");
const {isAdmin,isAuthenticated,isSignedIn} = require("../controllers/auth");

router.param("userId",getUserById);//this is a middle ware
router.get("/user/:userId",isSignedIn,isAuthenticated,getUser);
router.put("/user/:userId",isSignedIn,isAuthenticated,updateUser);
router.get("/orders/user/:userId",isSignedIn,isAuthenticated,userPurchaseList);



module.exports = router;