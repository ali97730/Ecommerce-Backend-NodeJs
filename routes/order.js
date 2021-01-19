const express = require("express");
const router = express.Router();

const{isAdmin,isAuthenticated,isSignedIn} = require("../controllers/auth");
const{getUserById,pushOrderinPurchaseList} = require("../controllers/user");
const {updateStock} = require("../controllers/product");

const {getOrderStatus,updateStatus,getAllOrders,createOrder, getOrderById} = require("../controllers/order");

//params

router.param("userId",getUserById);
router.param("orderId",getOrderById);



//actual Routes

//create
router.post(
    "/order/create/:userId",
    isSignedIn,
    isAuthenticated,
    pushOrderinPurchaseList,
    updateStock,
    createOrder
);

//read
router.get("../order/all/:userId",isSignedIn,isAuthenticated,isAdmin,getAllOrders);
//status of order
router.get("/order/status/:userId",isSignedIn,isAuthenticated,isAdmin,getOrderStatus)
router.put("/order/:orderId/status/:userId",isSignedIn,isAuthenticated,isAdmin,updateStatus)
module.exports = router;