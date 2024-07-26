import express, { Router } from "express";
import { knex } from "../knex";
import { TodoController } from "../Controllers/TodoController";
import { TodoService } from "../Services/TodoService";

const todoService = new TodoService(knex);
const todoController = new TodoController(todoService);

export const TodoRouter = Router();
TodoRouter.use(express.json());
TodoRouter.use(express.urlencoded({ extended: true }));

TodoRouter.get("/", todoController.getUserTodo);
TodoRouter.post("/", todoController.addUserTodo);
TodoRouter.delete("/", todoController.removeUserTodo);
TodoRouter.post("/count", todoController.addTodoCount);