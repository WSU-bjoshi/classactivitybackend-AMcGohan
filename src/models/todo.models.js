import pool from "../db/connection.js"
import todo from "./todo.js";

export async function getAllTodos() {
    const [rows] = await pool.query("SELECT * FROM todos;")
    console.log(rows);
    return rows;
}

let nextId = 3;

let todos = [
    {id:1, task:"Try to have fun with express", done:false},
    {id:2, task:"Buy eggs", done:false}
];

export async function createTodo(task) {
    return await todo.create({userid, task});
}

export async function toggleTodoById(id){
    const [result] = await pool.query(
        "UPDATE todos SET completed = NOT completed WHERE todos.id = ?", [id]
    );

    return pool.query("SELECT todos.task FROM todos WHERE todos.id = ?", [id]);
}

function deleteTodoById(id) {
    const todoIndex = todos.findIndex(t => t.id === id);
    if (todoIndex === -1) {
        return null;
    }
    return todos.splice(id, 1)[0];
}

function listTaskById(id) {
    return todos[todoIndex].task;
}

export default{
    deleteTodoById,
    listTaskById
};