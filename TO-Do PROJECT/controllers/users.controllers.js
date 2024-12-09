// const USER_SCHEMA = require("../models/users.model");

// exports.registerUser = async (req, res) => {
//     try {
//         const { name, email, password, role } = req.body;
        
        
//         let existingUser = await USER_SCHEMA.findOne({ email });
//         if (existingUser) {
//              return res.status(401).json({ message: "email is already exist" });
//         }
//         let newUser = await USER_SCHEMA.create({ name, email, password, role });
//         res.status(201).json({ success: true, msg: "User registered",newUser });

//     }
//     catch (error) {
//         console.log("err while registering a user");
//         res.status(500).json({ success: false, message: error })
//     }

// }
// // ===========FetchAll======================
// exports.fetchAllUsers = async(req,res)=>{
//    try {
//     let allUser = await USER_SCHEMA.find();
//         res.status(200).json({success:true, message:" All users are here",allUser});
    
//    } catch (error) {
//     console.log("error while fetching all users");
//     res.status(200).json({success:false , message:error})
    
//    }

// }
// // ===========fecch One User==================
// exports.fetchOneUser = async (req, res) => {
//     try {
//         let {id} = req.params;
    
//     let user = await USER_SCHEMA.findOne({_id: id});
//     if (!user) 
//         return res.json({massage:"id is not present in our data base"})
        
//     res.status(200).json({success:true, massage:" fetch One User Data",user})
        
//     } catch (error) {
//         console.log(" eror while fetching one user data ");
//         res.status(500).json({success:false, massage:"error" })
        
//     }
//  }
// //  ====================delete================
// exports.deleteUser = async (req, res) => { 
//     try { let {id} = req.params;
//     let user = await USER_SCHEMA.findOne({_id: id});
//     if (!user) 
//         return res.status(404).json({success:false, massage:"user not exist", data:user})
        
     
//     res.status(200).json({success:true , massage:"Delete user Successfully"})
        
//     } catch (error) {
//         console.log("This  user_id  is not present in our database")
//         res.status(500).json({success:false, massage: "error"})
        
//     }
// }

exports.login = asyncHandler(async (req, res) => {
    let { email, password } = req.body;

    let user = await USER_SCHEMA.findOne({ email});
    if (!user) return res.status(401).json({message:"user not found" });

    let isMatch = await user.verifyPassword(password);

    if (!isMAtch) return res.status(401).json({
        message: "invalid credentials" });

    let token = generateToken(user._id);

    res.cookie("myCookie", token, {
            maxAge: 10 * 60 * 60 1000,
            httpOnly: true,
        });
    
    res.status(200).json({
        success: true,
        message: "user logged in",
        token: token,
    });
});

exports.logout = asyncHandler(async )