import type { Knex } from "knex";
// import { knex } from "../knex";

export class TodoService {
    constructor(private knex: Knex) { }

    // ========== get todo items by usename ==========
    async getAllTodosByUsername(username: any) {
        return await this.knex("todos")
            .where({ username, deleted: false })
            .select("*")
            .orderBy("created_at", "asc");
    }

    // ========== create todo items by usename ==========
    async addTodoByUsername(username: any, content: String) {
        return await this.knex("todos")
            .insert({
                username,
                content,
                count: 0,
                deleted: false
            });
    }

    // ========== remove todo items by id ==========
    async removeTodoById(id: number) {
        return await this.knex("todos")
            .where({ id })
            .update({
                deleted: "true"
            });
    }

};