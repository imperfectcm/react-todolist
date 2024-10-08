import { TodoService } from "../Services/TodoService";
import { Request, Response } from "express";

export class TodoController {
    constructor(private todoService: TodoService) { };

    // ========== get todo items by usename ==========
    getUserTodo = async (req: Request, res: Response) => {
        let { username } = req.query;
        try {
            let userTodo = await this.todoService.getAllTodosByUsername(username);
            if (!userTodo.length) return res.status(200).json({ message: "No todo items" });
            res.status(200).json({ data: userTodo });
            return;
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        }
    };

    // ========== add new todo item by usename ==========
    addUserTodo = async (req: Request, res: Response) => {
        const { username, content } = req.body;
        try {
            await this.todoService.addTodoByUsername(username, content);
            res.status(201).json({ message: "Todo item added successfully" });
            return;
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        }
    };

    // ========== remove new todo item by id ==========
    removeUserTodo = async (req: Request, res: Response) => {
        const { id } = req.body;
        try {
            await this.todoService.removeTodoById(id);
            res.status(201).json({ message: "Todo item deleted successfully" });
            return;
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        }
    };

    // ========== add todo item count by id ==========
    addTodoCount = async (req: Request, res: Response) => {
        const { id } = req.body;
        try {
            let count = await this.todoService.addTodoCountById(id);
            res.status(201).json({ data: count });
            return;
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        }
    };

    // ========== update todo item content by id ==========
    updateTodoContent = async (req: Request, res: Response) => {
        const { id, content } = req.body;
        try {
            let newContent = await this.todoService.updateTodoContentById(id, content);
            res.status(201).json({ data: newContent });
            return;
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        }
    };

};