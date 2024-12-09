const TODO_SCHEMA = require("../models/todo.model");
const asyncHandler= require("express-async-handler");

exports.addTODO = asyncHandler(async (rq, res) =>{
    let { title, description, status } = req.body;

    let newTodo = TODO_SCHEMA({
        title,
        description,
        status,
        createdBy: req.myUser._id, //myUSer details is coming from middleware
    });

    res.status(201).json({ success: true, message: "todo added successfully", newTodo });
});

exports.fetchAll = asyncHandler(async (req, res) =>{
    let todo = await TODO_SCHEMA.find();

    if (todo.length == 0) return res.status(200).json({
        message: "no todo present"});

        res.status(200).json({ success: true, message: "todo fetched", todo });
});

exports.fetchOne=asyncHandler(async (req, res) => {
    let { id } = req.params;

    let findTodo = await TODO_SCHEMA.findOne({ _id: id, createdBy: req.myUser._id });
    // id is extracted from param and also we are verifying whether the user that is requesting the todo is created 

    if (!findTodo) return res.status(200), json({ message: "no todo found" });

    res.status(200).json({ success: true, message: "todo fetched", todo });
});

exports.deleteTodo = asyncHandler(async (req, res) => {
    let {id} = req.params;

    let findTodo = await TODO_SCHEMA. findOne({_id: id, createdBy: req.myUser._id });

    if (!findTodo) return res.status(400).json({ message: "no todo found" });

    let deletedTodo = await TODO_SCHEMA.deleteOne({ _id: findTodo._id });

    res.status(200).json({ success: true, message: "todo deleted", deletedTodo });
});