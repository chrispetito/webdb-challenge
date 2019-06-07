exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("projects", function(table) {
      table.increments();
      table.string("name").notNullable();
      table.string("description").notNullable();
      table.boolean("completed").defaultTo(false);
    })
    .createTable("actions", function(table) {
      table.increments();

      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      table.string("description").notNullable();
      table.string("notes").notNullable();
      table.boolean("completed").defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
