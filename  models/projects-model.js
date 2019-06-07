const db = require("../dbconfig");

module.exports = {
  getProjects, 
  add
};

function getProjects() {
  return db("projects");
}

function add(project) {
  return db("projects").insert(project);
}
