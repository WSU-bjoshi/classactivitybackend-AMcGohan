import pool from "../db/connection.js"
import Todo from "./Todo.js";

export async function getAllTodos() {
    const [rows] = await pool.query("SELECT * FROM Todos;")
    console.log(rows);
    return rows;
}

let nextId = 3;

let Todos = [
    {id:1, task:"Try to have fun with express", done:false},
    {id:2, task:"Buy eggs", done:false}
];

export async function createTodo(task) {
    return await Todo.create({userid, task});
}

export async function toggleTodoById(id){
    const [result] = await pool.query(
        "UPDATE Todos SET completed = NOT completed WHERE Todos.id = ?", [id]
    );

    return pool.query("SELECT Todos.task FROM Todos WHERE Todos.id = ?", [id]);
}

function deleteTodoById(id) {
    const TodoIndex = Todos.findIndex(t => t.id === id);
    if (TodoIndex === -1) {
        return null;
    }
    return Todos.splice(id, 1)[0];
}

function listTaskById(id) {
    return Todos[TodoIndex].task;
}

export default{
    deleteTodoById,
    listTaskById
};