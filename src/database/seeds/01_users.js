
exports.seed = function(knex) {
  
  return knex('users').del()
    .then(function () {
     
      return knex('users').insert([
       {username: 'felipesalles@gmail.com'},
       {username: 'joaosalles@gmail.com'},
      ]);
    });
};
