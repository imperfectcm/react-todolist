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

    // ========== add todo item count by id ==========
    async addTodoCountById(id: number) {
        let data = await this.knex("todos")
            .where({ id })
            .increment("count", 1)
            .returning("count");

        return data[0].count;
    }

    // ========== update todo item content by id ==========
    async updateTodoContentById(id: number, content: String) {
        let data = await this.knex("todos")
            .where({ id })
            .update({ content })
            .returning("content");

        return data[0].content;
    }

};