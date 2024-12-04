const {Schema,model}=require("mongoose");
const bcrypt=require("bcrypt");
const userSchema=new Schema({
    name:{
        type:String,
        reequired:[true,"name Field Is required"],
        trim:true,
    },
    email:{
        
        type:String,
        reequired:[true,"Email Field Is required"],
        trim:true,
        unique:true,
    },
    password:{
        
        type:String,
        reequired:[true,"pasword Field Is required"],
        trim:true,
        minlength:5,

    },
    role:{
        
        type:String,
        enum:["user","admin"],
        default:"user",
    },
    profilePictue:{
        type:String,
    },

},
    {
        timestamps:true,

    }
);


// hashing the password

userSchema.pre("save",async function (next) {


    // if(!this.isModified("password")){
    // next();
    // }

    let salt =await bcrypt.genSalt(10);
    let hashedpasword=await bcrypt.hash(this.password,salt);
    this.password=hashedpasword;
})

module.exports=model("User",userSchema)