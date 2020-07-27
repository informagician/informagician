
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {id: 1, title: 'My first blog post', url:'my-first-blog-post',short:"This is my first blog post on informagician.com", long:"lorem ipsum doler sit amet dot dot dot tea is ready. made a mess in my github today.", author:'Milo Rastgoo'}
      ]);
    });
};
