import { getAllTodos, createTodo, toggleTodoById, deleteTodoById, listTaskById} from "../services/todo.service.js";

export function listTodos(req, res) {
    const todos = getAllTodos();
    res.json({count: todos.length, todos});
}

export function createTodos(req, res) {

    try {
        const {task} = req.body;
        const todo = createTodo(task);

        res.status(201).json({message:"Created", todo});
    } catch(err) {
        res.status(400).json({error:err.message});
    }
}

// Send a GET request with an ID to retrieve a task and its status

export function listTask(req, res) {
    const task = listTaskById(Number(req.params.id));
    
    if (!task) {
        return res.status(404).json({error : "Task ID not found"});
    }
    res.json({task:task});
}

// Send a DELETE request with an ID to delete a task

export function toggleTodo(req, res) {
    const id = Number(req.params.id);
    const todo = toggleTodoById(id);
    
    if (!todo) {
        return res.status(404).json({error : "Todo not found"});
    }
    res.json({message:"Toggled", todo});
}

export function removeTodo(req, res) {
    const id = Number(req.params.id);
    const todo = deleteTodoById(id);

    if (!todo) {
        return res.status(400).json({error: "Todo not found"});
    }

    res.json({message: "Deleted Successfully"});
}