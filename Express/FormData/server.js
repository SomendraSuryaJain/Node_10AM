const express = require("express")

const app = express();


//! middleware
app.use(express.urlencoded({extended: true}));


let fs=require("node:fs");

//! ============ routing part
//! home page
app.get("/", (req, res) => {
    fs.createReadStream("./public/index.html").pipe(res);
});

//! form Page
app.get("/form", (req, res) => {
    fs.createReadStream("./public/form.html").pipe(res);
});

//! contact Page
    app.get("/contact", (req, res) => {
    fs.createReadStream("./public/contact.html").pipe(res);
 });

 //! 404 Page
 app.get("*", (req, res) => {
    fs.createReadStream(`<h1>page not found</h1>`);
 });

 app.post("/abc", (req, res) => {
    //? 1) use this endpoint in the form action
    //? 2) use form method  to "post"
    //? 3) use name attribute in the input

    let payload = req.body;
    console.log(payload);
 });



    app.listen(9000, (err) => {
        if (err) console.log(err);
        console.log(`server running at http://localhost:9000`);
        
    });

    //? nodemon server