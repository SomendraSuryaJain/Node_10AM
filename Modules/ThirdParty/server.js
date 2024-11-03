//! before installing any third party module==> we must have "package.json" file in the root directory.
// steps==>
    
    

    // ? to create a package.json file ==> "npm init -y"

    //! package.json file consists of meta data (name, author, version, keywords, etc..) of the project along with dependencies.

    //! to install any third party modules/package ==> type "npm i"/module name.
    // npm i module name
    // npm install module name

    //! for install multiple module ==> // "npm intall module 1 module 2"

    const mongodb = require("mongodb").MongoClient;
    console.log(mongodb);

    let connectDB = async () => {
        let client = await mongodb.connect("mongodb://localhost:27017"); // this will create a connection with mongodb database.
        console.log("connection established");   
    
        let database = client.db("nodeDB"); // creating a database with db()
        console.log("database created");

        let collection = await database.createCollection("myInfo"); // creating a collection with createCollection()
        console.log("collection created");
        
    }
