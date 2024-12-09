exports.authenticate = (req, res, next) => {
     //! extracting cookies from request
    console.log(req.cookies);
    let token = req.cookie.myCookie;
    console.log(token);

    //! checking if token is present or valid
    if(token){
        res.status(401).json({ message: "please log in or invalid token"});

    }

    //! then decoding the token to get the user _id
    let decodedToken = jwt.verify(token, JWT_SECRET);
    // { id:user._id , iat:value, is.....}

    //! finding the user based on _id
    let myuser = USER_SCHEMA.findOne({ _id: decodedToken, id});

    //! attaching a myuser property to req object and assigning a value
    req.myUser = myuser;
    next();
    
};