const db = require('../dbconfig')

module.exports = {
    getActions,
    getActionById,
    add
}

function getActions() {
    return db('actions')
}

function getActionById(id) {
    return db('actions').where({ id }).first()
}
function add(action) {
    return db("actions").insert(action);
  }