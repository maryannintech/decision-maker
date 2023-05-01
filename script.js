let movie_lst = [];
let movie = prompt("Enter movie choices separated by comma: ");
movie_lst = movie.split(",");
let movie_choices = movie_lst[Math.floor(Math.random() * movie_lst.length)];
console.log(`Watch ${movie_choices} today!`);
