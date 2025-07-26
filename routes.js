const express=require("express");

const router=express.Router();

const Todo = require("./models/todo");

router.get("/todos", async (req,res)=>{
   const todos=await Todo.find();

   res.status(200).json(todos);
});
router.post("/todos", async (req,res)=>{
    const task=req.body.task;

    const newToDo=new Todo({task:task});
    console.log(newToDo);
    await newToDo.save();
    res.status(201).json(newToDo);
});
router.put("/todos/:id", (req,res)=>{
    res.status (200).json({msg:"PUT todos /api/todos"})
});
router.delete("/todos/:id", (req,res)=>{
    res.status (200).json({msg:"DELETE todos /api/todos"})
});


module.exports=router;