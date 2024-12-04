const http = require("http");

let server = http.createServer(req, res) => {
    console.log(req.url);

    if(req.method === "POST") {
        //TODO
    } else {
        //! routing
    //! home page
    if(req.url === "/") {
        res.end("Home Page");
    }
    //! about page
    else if (req.url === "/about") {
        res.end("about page");
    }
    //! form page
    else if (req.url === "/form") {
        fstat.createReadStream("./index.html","utf-8").pipe(res);
    }
    //! page not found
    else {
        res.end("page is not found");
    }
}
});

server.listen(9000, (err) => {
    if (err) console.log(err);
    console.log("server running at port 9000");
});