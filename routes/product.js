const express = require("express");
const router = express.Router();


const{getAllUniqueCategories,getAllProducts,updateProduct,deleteProduct,photo,getProduct,createProduct,getProductById} = require("../controllers/product");
const{isAdmin,isAuthenticated,isSignedIn} = require("../controllers/auth");
const{getUserById} = require("../controllers/user");
//all of params
router.param("userId",getUserById);
router.param("productId",getProductById);
// all of actual routes
//create routes
router.post("/product/create/:userId",isSignedIn,isAuthenticated,isAdmin,createProduct);
//read routes
router.get("/product/:productId",getProduct);
router.get("/product/photo/:productId",photo);
//delete route

router.delete("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,deleteProduct);
//update route
router.put("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,updateProduct);
//listing route
router.get("/products",getAllProducts)

router.get("/products/categories",getAllUniqueCategories)

module.exports = router;