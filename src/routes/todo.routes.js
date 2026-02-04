import { Router } from "express";

import {listTodos, createTodos, toggleTodo, listTask, removeTodo } from "../controllers/todo.controllers.js";

const router = Router();

router.get("/", listTodos); //function that is called when user calls a GET request
router.get("/:id/task", listTask);
router.post("/", createTodos);
router.patch("/:id/toggle", toggleTodo);
router.delete("/delete/:id", removeTodo);

export default router;