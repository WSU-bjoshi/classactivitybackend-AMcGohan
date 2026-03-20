import { Router } from "express";

import {listTodos, createUserTodos, toggleTodo, listTask, removeTodo } from "../controllers/todo.controllers.js";
import { validateBody } from "../middleware/validate.middleware.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();

router.use(requireAuth);

// router.use(requireRole("admin", "staff", "users"));

router.get("/", listTodos); //function that is called when user calls a GET request
router.get("/:id/task", listTask);
// router.post("/", validateBody(["task"]), createUserTodos);
router.patch("/:id/toggle", toggleTodo);
router.delete("/delete/:id", removeTodo);

export default router;