const db = require('../dbconfig')

module.exports = {
    getActions,
    add
}

function getActions() {
    return db('actions')
}


function add(action) {
    return db("actions").insert(action);
  }