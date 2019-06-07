
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1, description: 'example action description', notes: 'example notes'},
        {project_id: 1, description: 'example action description', notes: 'example notes'},
        {project_id: 1, description: 'example action description', notes: 'example notes'}
      ]);
    });
};
