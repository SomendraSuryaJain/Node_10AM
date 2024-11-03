//! importing the moduleconst express = require("express");
console.log(express);

//! calling/invoking top level function
const app = express();

// console.log(app);

//! routing part

//! home page
app.get("/", (req, res) =>{
    res.send("home page");
});

//! download page
app.get("/download", (req, res) =>{
    res.send("download page");
});

//!about page
app.get("/about", (req, res) =>{
    res.send("Hello World");
});

//! Page not found
app.get("*", (req, res) =>{
    res.send("Page not found");
});

//! port ssignment
app.listen(9000, (err) =>{
    if (err) console.log(err);
    console.log("server running....");
});