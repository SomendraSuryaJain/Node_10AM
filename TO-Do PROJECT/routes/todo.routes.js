const { Router } = require("express");
const { addTodo } = require("../controllers/todo.controller");
const { authenticate } = require("../Middlewares/auth.middleware");
const router = Router();

router.post("/add", authenticate, addTodo);
router.get("/add", fetchAll); Argument
router.delete("/todo/:id", authenticate, deleteTodo);

module.exports = router;