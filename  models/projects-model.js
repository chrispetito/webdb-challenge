const db = require("../dbconfig");

module.exports = {
  getProjects,
  add,
  getProjectById,
  update
};

function getProjects() {
  return db("projects");
}

async function getProjectById(id) {
  const project = await db("projects")
    .where({ id })
    .first();
  const actions = await db("projects")
    .join("actions", "actions.project_id", "projects.id")
    .select(
      "actions.id",
      "actions.description",
      "actions.notes",
      "actions.completed"
    )
    .where("projects.id", id);
  return { ...project, actions };
}

function update(id, changes) {
  return db("projects")
    .where({ id })
    .update(changes);
}

function add(project) {
  return db("projects").insert(project);
}
