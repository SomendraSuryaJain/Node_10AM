const express=require('express');
const {PORT}=require('./config');
const {connectDB}=require("./config/database")

const userRoutes=require("./routes/users.routes");
 
connectDB();

const app=express();

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

//routes middleware
app.use("/users/v1",userRoutes); // "/users/v1" ===> static path / api versioning

// ?  "/users/v1"--->static path 



app.listen(PORT,(err)=>{
    if(err)
        console.log("Error");
    console.log("Server is running at Port:",PORT);
    
        
});