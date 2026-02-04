let nextId = 3;

const todos = [
    {id:1, task:"Try to have fun with express", done:false},
    {id:2, task:"Buy eggs", done:false}
]

export function getAllTodos() {
    return todos;
}

export function createTodo(task) {

    if (!task || typeof task !=="string" || task.trim()==="") {
        throw new error("Invalid task");
    }

    const todo = {id: nextId++, task:task.trim(), done: false};
    todos.push(todo);
    return todo;
}

export function toggleTodoById(id){
    const todo = todos.find(t => t.id === id);
    if (!todo){
        return null;
    }
    todo.done = !todo.done;
    return todo;
}

export function deleteTodoById(id) {
    const todoIndex = todos.findIndex(t => t.id === id);

    if(todoIndex === -1){
        return null;
    }

    return todos.splice(todoIndex, 1)[0];
}

export function listTaskById(id) {
    const todoIndex = todos.findIndex(t => t.id === id);

    if (todoIndex === -1) {
        return null;
    }

    return todos[todoIndex].task;
}