import todoModels from "../models/todo.models.js"


function getAllTodosService() {
    return todoModels.getAllTodos();
}

function createTodoService(task) {
    if (!task || typeof task !=="string" || task.trim()==="") {
        throw new error("Invalid task");
    }
    return todoModels.createTodo(task);
}

function toggleTodoByIdService(id) {
    // const todo = todos.find(t => t.id === id);
    // if (!todo){
    //     return null;
    // }
    return todoModels.toggleTodoById(todo);
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
    getAllTodosService,
    createTodoService,
    toggleTodoByIdService,
    deleteTodoByIdService,
    listTaskByIdService
};