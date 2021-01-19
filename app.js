require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//my Routes
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/user.js");
const categoryRoutes = require("./routes/category.js");
const productRoutes = require("./routes/product.js");
const orderRoutes = require("./routes/order.js");

//this is my db connection
mongoose.connect(process.env.DATABASE,
 {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
.then(() => {
    console.log("DB CONNECTED");
});
//this is my middlewares 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//my routes
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api/",productRoutes);
app.use("/api",orderRoutes);




 //my ports
const port = process.env.PORT || 8000;
//starting the server
app.listen(port,()=>{
    console.log(`app is running at ${port}`);
})