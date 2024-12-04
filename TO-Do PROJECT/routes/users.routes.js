const { Router } = require("express");
const { registerUser,fetchOneUser,fetchAllUsers,deleteUser } = require("../controllers/user.controller");
const router = Router();

router.post("/register", registerUser);
router.get("/allusers", fetchAllUsers);
router.get("/oneuser/:id", fetchOneUser);
router.delete("/del/:id", deleteUser);

module.exports = router;