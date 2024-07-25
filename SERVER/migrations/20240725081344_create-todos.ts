import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("todos", (table) => {
        table.increments();
        table.string("content");
        table.string("username");
        table.integer("count");
        table.enu('deleted', ['true', 'false']);
        table.timestamps(false, true);
      });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("todos");
}

