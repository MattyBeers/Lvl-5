const express = require ( 'express')
const todoRouter = express.Router()
const {v4: uuidv4} = require('uuid') 

todos = [
    {
        "name": "Run the Dish washer ",
        "description": "Stock dish washer, put in detergent, run, empty clean dishes",
        "imageUrl": "http://www.myimage....",
        "completed": false,
        _id: uuidv4()
    },
    {
        "name": "Trash",
        "description": "Fill trash bin, Put to curb, Bring back empty trash bin",
        "imageUrl": "http://www.myimage....",
        "completed": false,
        _id: uuidv4()
    },{
        "name": "Eisenhower Chart",
        "description": "Do now, less urgent, delegate, delete",
        "imageUrl": "http://www.myimage....",
        "completed": false,
        _id: uuidv4()
    }
]
// - returns the entire list of todos,
// - allows the user to update a todo by its `_id`,
// - allows the user to delete a todo by its `_id`, and
// - allows the user retrieve a single todo by its `_id`.

//entire list
todoRouter.get("/", (req, res) =>{
    res.send(todos)
})
// update by id
todoRouter.put("/:todoId", (req, res) =>{
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})
// delete by id 
todoRouter.delete("/:todoId", (req, res) =>{
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted completed todo")
})
//get one by id
todoRouter.get("/:todoId", (req, res)=>{
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id ===todoId)
    res.send(foundTodo)

})



module.exports = todoRouter