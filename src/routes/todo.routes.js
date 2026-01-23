import { Router } from "express";

import {listTodos, createTodos, toggleTodo } from "../controllers/todo.controllers.js";

const router = Router();

router.get("/", listTodos); //function that is called when user calls a GET request
request.post("/", createTodos);
router.patch("/:id/toggle", toggleTodo);

export default router;