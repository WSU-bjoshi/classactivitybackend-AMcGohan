import * as todoModels from "../models/todo.models.js"


export async function getAllTodosService() {
    return await todoModels.getAllTodos();
}

export async function createTodoService(task) {
    if (!task || typeof task !=="string" || task.trim()==="") {
        throw new error("Invalid task");
    }
    return await todoModels.createTodo(task);
}

export async function toggleTodoByIdService(id) {
    // const todo = todos.find(t => t.id === id);
    // if (!todo){
    //     return null;
    // }
    return await todoModels.toggleTodoById(id);
}

function deleteTodoByIdService(id) {
    // const todoIndex = todos.findIndex(t => t.id === id);

    // if(todoIndex === -1){
    //     return null;
    // }
    return todoModels.deleteTodoById(id);
}

function listTaskByIdService(id) {
    // const todoIndex = todos.findIndex(t => t.id === id);

    // if (todoIndex === -1) {
    //     return null;
    // }
    return todoModels.listTaskById(todoIndex);
}

export {
    deleteTodoByIdService,
    listTaskByIdService
};